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
  	$("#flexslider").show( function() {
  		$("#video_flexslider").hide();
  	})
  },
  showVideos : function( e) {
  	e.preventDefault();
  	$("#video_flexslider").show( function() {
  		$("#flexslider").hide();
  	})
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
    	console.log(this.options.showVideo);
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
	
	
	setTimeout(function() {
    	var videos = that.model.get('videos');
    	for(i = 0; i < videos.length; i=i+1) {
    		var playerid="player"+i;
    		if(videos[i].video_type=="youtube") {
	    		that.players[i]  = new YT.Player(playerid, {
		      		height: 340,
		      		width: 480,
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
    			'" width="480" height="340" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
    			
    			holder.after(player);
    			holder.remove();
    			that.players[i] = $f(document.getElementById(playerid));
				that.players[i].addEvent('ready', function() {
				});
    		}
    	}
    }, 500);
    
    setTimeout(function(){
	$("#flexslider")
    .flexslider({
      animation: "slide",
      useCSS: false,
      animationLoop: false,
      smoothHeight: true,
      animationSpeed: 300,
      animationLoop: false, 
      before: function(slider){
      }
  });
  	$("#video_flexslider").fitVids().flexslider({
			animation: "fade",
			useCSS: false,
			animationLoop: false,
			smoothHeight: false,
			animationSpeed: 300,
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
   }, 5000);
 
    return this;
  }
});