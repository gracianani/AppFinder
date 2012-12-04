AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.ShowView = Backbone.View.extend ({
  template: JST["backbone/templates/waterfall_apps/show"],

  className: "show",
  tagName : "div",
  initialize: function ()  {
  	this.players=[];
  	this.model.on('change',this.render,this);
  },
  events: {
    "click .expand" : "toggleDesc",
    "click .folded" : "toggleDesc",
    "mouseenter .btn-install" : "toggleInstallText",
    "mouseleave .btn-install": "toggleInstallText",
    "click #lnk_screenshots" : "showScreenShots",
    "click #lnk_videos" : "showVideos"
  },
  showScreenShots : function( e) {
  	e.preventDefault();
  	$("#flexslider").addClass("active");
  	$("#video_flexslider").removeClass("active");

  },
  showVideos : function( e) {
  	e.preventDefault();
  	$("#flexslider").removeClass("active");
  	$("#video_flexslider").addClass("active");
  },
  toggleDesc: function(e) {
  	  e.preventDefault();
	  this.$el.find('.app-long-description').toggle();
	  this.$el.find('.app-short-description').toggle();
  },
  toggleInstallText: function(e) {
  	  this.$el.find('.price-text').toggle();
  	  this.$el.find('.install-text').toggle();
  },
  render: function(){
    $(this.el).html(this.template(this.model.toJSON() ));
    
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
    var that = this;  
    setTimeout(function() {
    	var videos = that.model.get('videos');
    	for(i = 0; i < videos.length; i=i+1) {
    		var playerid="player"+i;
    		that.players[i] = new AppFinder.Models.Player({
    								player_id: playerid, 
    								video_type: videos[i].video_type, 
    								video_id : videos[i].video_id,
    								width : 397,
    								height: 728});
    	}
    });
    setTimeout(function() {

	    $("#flexslider")
	    .flexslider({
			animation: "slide",
			useCSS: false,
			animationLoop: false,
			smoothHeight: true,
			animationSpeed: 300,
			animationLoop: false
	    });
	    
	    $("#video_flexslider").fitVids().flexslider({
			animation: "fade",
			useCSS: false,
			animationLoop: false,
			smoothHeight: false,
			animationSpeed: 300,
			slideshow: false,  
			before: function(slider){
				var videos = that.model.get('videos');
				for(i=0;i<that.players.length; i=i+1) {
					if(that.players[i]!=null && typeof(that.players[i]) != 'undefined'){
						that.players[i].pause();
		        	}
		        }
	      	}
	    });
  
  }, 2000);
    return this;
  }
    
});
  
