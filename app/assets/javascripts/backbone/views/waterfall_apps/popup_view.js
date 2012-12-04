AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.PopupView = Backbone.View.extend({
  template: JST["backbone/templates/waterfall_apps/popup"],
  className: "popup",
  tagName: "div",
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
  	$("#video_flexslider").removeClass("active");
  	$("#flexslider").addClass("active");
  	
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
  initialize : function() {

  	var that = this;
    this.players=[];
    
  	TINY.box.show({html:"",width:'940',animate:true,
   		openjs:function(){
   			
      		position = $('body').offset();
      		activePosition = position.top;
      		scrollPosition = $('body').scrollTop();
      		$('body').css("position","fixed").css("overflow", "auto").css('width', '100%').css('top', -scrollPosition+'px');
      		$('body').scrollTop(scrollPosition);
      		$('.tmask').css('top',-position.top + 'px');
      		$('.tbox').css('top','20px');
      		$('.tbox').css('height',$(window).height()-100+'px');
      		$('.tinner').css('height','100%');
			window.onscroll = function(oEvent) { oEvent.preventDefault(); oEvent.stopPropagation();return false;}
			 
			$('.tcontent').html(that.el);
			
			// Load video as soon as the popup opened.
			var videos = that.model.get('videos');
	    	for(i = 0; i < videos.length; i=i+1) {
	    		var playerid="player"+i;
	    		that.players[i] = new AppFinder.Models.Player({
	    								player_id: playerid, 
	    								video_type: videos[i].video_type, 
	    								video_id : videos[i].video_id,
	    								width : 480,
	    								height : 340
	    							});
	    	}

      	}, 
  		closejs:function() { 
  			$('body').css('position','').css('overflow','').css('width','').css('top',''); 
  			$('body').scrollTop(scrollPosition);
			window.router.navigate("index", {trigger: false});
  		}});
  		
  	this.model.on('change',this.render,this);

  },
  render: function() {
  	var that = this;  
    $(this.el).html(this.template(this.model.toJSON() ));
    if(this.options.showVideo) {
    	$(that.el).find("#video_flexslider").show( function() {
  			$(that.el).find("#flexslider").hide();
  		});
    }
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
	
    
    setTimeout(function(){
	$("#flexslider")
    .flexslider({
      animation: "slide",
      useCSS: false,
      animationLoop: false,
      smoothHeight: true,
      animationSpeed: 300,
      before: function(slider){
      }
  });
  
  	$("#video_flexslider").fitVids().flexslider({
		animation: "fade",
		useCSS: false,
		animationLoop: false,
		smoothHeight: false,
		animationSpeed: 0,
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
   }, 5000);
 
    return this;
  }
});