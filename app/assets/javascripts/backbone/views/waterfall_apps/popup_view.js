AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.PopupView = Backbone.View.extend({
  template: JST["backbone/templates/waterfall_apps/popup"],
  className: "popup",
  tagName: "div",
  events: {
    "click .expand" : "toggleDesc",
    "click .folded" : "toggleDesc"
  },
  toggleDesc: function(e) {
  	  e.preventDefault();
	  this.$el.find('.app-long-description').toggle();
	  this.$el.find('.app-short-description').toggle();
  },
  initialize : function() {
  	var that = this;
  	TINY.box.show({html: this.render().el,width:'940',animate:true,
   		openjs:function(){
   			
      		position = $('body').offset();
      		container.css('top', -position.top + 'px');
      		activePosition = position.top;
      		scrollPosition = $('body').scrollTop();
      		$('body').css("position","fixed").css("overflow", "auto").css('width', '100%').css('top', -scrollPosition+'px');
      		$('body').scrollTop(scrollPosition);
      		$('.tmask').css('top',-position.top + 'px');
      		$('.tbox').css('height',$(window).height()-100+'px');
      		$('.tinner').css('height','100%');
			window.onscroll = function(oEvent) { oEvent.preventDefault(); oEvent.stopPropagation();return false;}
			window.router.navigate("id" + that.model.id + "&popup", {trigger: false});
      	}, 
  		closejs:function() { 
  			$('body').css('position','').css('overflow','').css('width','').css('top',''); 
  			$('body').scrollTop(scrollPosition);
			window.router.navigate("index", {trigger: false});
  		}});
    	
  },
  render: function() {
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