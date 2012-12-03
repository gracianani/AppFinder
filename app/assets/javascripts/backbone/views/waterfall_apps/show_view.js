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
    		if(videos[i].video_type=="youtube" && typeof(YT.player) != 'undefined') {
	    		that.players[i]  = new YT.Player(playerid, {
		      		height: '397',
		      		width: '728',
		      	    videoId: videos[i].video_id,
		      	    events: {
		      	    	'onReady' : function() { }
		      	    }
	    		});
    		}
    		else if(videos[i].video_type=="vimeo") {
    			// render iframe
    			var holder =$(that.el).find("#"+playerid);
    			var player = '<iframe id="' + playerid+ 
    			'" src="http://player.vimeo.com/video/'+ videos[i].video_id +
    			'?api=1&amp;player_id='+ playerid + 
    			'" width="728" height="397" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
    			
    			holder.after(player);
    			holder.remove();
    			that.players[i] = $f(document.getElementById(playerid));
				that.players[i].addEvent('ready', function() {
				});
    		}
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
			pausePlay : true,
			before: function(slider){
				var videos = that.model.get('videos');
				for(i=0;i<that.players.length; i=i+1) {
					if(that.players[i]!=null && typeof(that.players[i]) != 'undefined'){
		        		if(videos[i].video_type == "vimeo") {
		        			that.players[i].api('pause');
		        		}
		        		else if(videos[i].video_type == "youtube") {
		        			if(typeof(that.players[i].stopVideo) != 'undefined') 
		        			    that.players[i].stopVideo();
		        		}
		        	}
		        }
	      	}
	    });
  
  }, 2000);
    return this;
  }
    
});
  
