AppFinder.Views.Developer = AppFinder.Views.Developer || {};

AppFinder.Views.Developer.DeveloperView = Backbone.View.extend({
  
  template: JST["backbone/templates/developer/developer"],
  tagName: "div",
  className: "developer",
  initialize : function() {
	$(window).on('resize', this.repositionBoards)

  },
  remove: function() {
    $(window).off('resize', this.repositionBoards);
   },
  repositionBoards:function(e) {
	  var wndWidth = $(e.currentTarget).width();
	  if ( wndWidth < 1024 ) {
	  }
	  
  },
  events: {
	  "mouseenter":"toggleSocialButton",
	  "mouseleave":"toggleSocialButton"
  },
  toggleSocialButton: function() {
	  this.$el.find('.social-share').toggle();
  },
  render: function() {
  	var that = this;
  	var $el = $(this.el);
    $el.html(this.template(this.model.toJSON() ));
    
    var ratingStr = this.model.get('app_avg_score');
    var ratings = parseFloat(ratingStr);
    if ( ratingStr.indexOf('+') > 0 ) {
	    ratings += 0.5
    }
    $el.find('.dev-raty').raty({
		'readOnly':true,
		'space':false,
		'score':ratings	    
    });
    
    $el.find('[rel="tooltip"]').tooltip();
	$el.find('.dev-app [rel="popover"]').each(function(){
    	$(this).smlPopover({
	    "trigger":"hover"
		});
			
    });
    
    
    if ( this.model.get('lat') != null ) {
	    var mapStr = '<iframe width="300" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src=http://maps.google.com.tw/maps?f=q&geocode=&q='+
	    this.model.get('lat') +
	    ',' +
	    this.model.get('lng') +
	    '&z=16&output=embed&t=q></iframe>';
	    console.log(mapStr);
	    $el.find('.dev-where').popover({
	    	"html":true,
	    	"content":mapStr,
		    "trigger":"hover"
	    });
	  }

    setTimeout(function(){
	    var containerHeight = $el.height();
	    $el.find('.dev-basicInfo').height(containerHeight - 55);
	    $el.find('.dev-appsContainer').height(containerHeight - 30);
	}, 0);
    return this;
  }
  
});