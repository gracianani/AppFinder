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
    setTimeout(function(){
	that.player  = new YT.Player('player', {
      height: '387',
      width: '587',
      videoId: that.model.get('video_id')
    });
	$(".flexslider")
    .flexslider({
      animation: "slide",
      useCSS: false,
      animationLoop: false,
      smoothHeight: true,
      animationSpeed: 300,
      animationLoop: false, 
      before: function(slider){
      	if(that.player != null && typeof(that.player) !='undefined' && typeof(that.player.stopVideo) != 'undefined'){
      		that.player.stopVideo();
      	}
      }
  });
   }, 3000);
 
    return this;
  }
});