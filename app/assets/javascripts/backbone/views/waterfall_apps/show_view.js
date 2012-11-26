AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.ShowView = Backbone.View.extend ({
  template: JST["backbone/templates/waterfall_apps/show"],

  className: "show",
  tagName : "div",
  events: {
    "click .expand" : "toggleDesc",
    "click .folded" : "toggleDesc"
  },
  toggleDesc: function(e) {
  	  e.preventDefault();
	  this.$el.find('.app-long-description').toggle();
	  this.$el.find('.app-short-description').toggle();
  },
  render: function(){
    $(this.el).html(this.template(this.options.model.toJSON() ));
    
    var ratingStr = this.model.get('ratings');
    var ratings = parseFloat(ratingStr);
    if ( ratingStr.indexOf('+') > 0 ) {
	    ratings += 0.5
    }
    $el = $(this.el);
    setTimeout(function(){		
		$el.find('.app-rating.raty-big').raty({
		'readOnly':true,
		'space':false,
		'score':ratings,
		'size'      : 24,
		'starHalf'  : 'star-half-big.png',
		'starOff'   : 'star-off-big.png',
		'starOn'    : 'star-on-big.png'
		
		});
		
    },0);
    
    setTimeout(function() {
    	$(".rslides").responsiveSlides({
	  auto: true,             // Boolean: Animate automatically, true or false
	  speed: 1000,            // Integer: Speed of the transition, in milliseconds
	  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
	  pager: true,           // Boolean: Show pager, true or false
	  nav: true,             // Boolean: Show navigation, true or false
	  random: false,          // Boolean: Randomize the order of the slides, true or false
	  pause: false,           // Boolean: Pause on hover, true or false
	  pauseControls: false,   // Boolean: Pause when hovering controls, true or false
	  prevText: "Previous",   // String: Text for the "previous" button
	  nextText: "Next",       // String: Text for the "next" button
	  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
	  controls: "",           // Selector: Where controls should be appended to, default is after the 'ul'
	  namespace: "rslides",   // String: change the default namespace used
	  before: function(){},   // Function: Before callback
	  after: function(){}     // Function: After callback
	});}, 2000);
    return this;
  }
    
});
  
