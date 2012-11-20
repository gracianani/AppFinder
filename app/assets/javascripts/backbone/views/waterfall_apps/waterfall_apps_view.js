AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};
var position = 0,
    container = $('.tmask'),
 	activePosition = 0,
	scrollPosition = 0;
          	
AppFinder.Views.WaterfallApps.WaterfallAppsView = Backbone.View.extend({
  template: JST["backbone/templates/waterfall_apps/waterfall_apps"],
  events: {
    "click .destroy" : "destroy",
    "click .app-share-btn" : "toggleShareMenu",
    "click div.app-like" : "toggleLike"
  },
  
  initialize : function(){
    this.mouseover = false;
  },
  toggleLike : function() {
    this.model.toggle_like();
    this.model.save();
    this.model.fetch();
    this.render();
  },
  toggleShareMenu : function(e) {
      var menuShare = this.$el.find(".menu-share");
      menuShare.slideToggle('fast');
      
      var btn = this.$el.find('.app-share-btn');
      btn.find('i').toggleClass('icon-white');
      btn.toggleClass('btn-danger');
  },
  fadeOutOthers : function(e) {
  	  var that = this;
  	  
  	  if ( !this.mouseover ) {
  	  	  this.mouseover = true;
	  	  $('.card').not(this.$el).animate({'opacity':'0.4'},500);
  	  }
	  
  },
  fadeInAll : function(e) {
  	  var that = this;

	  if ( this.mouseover ) {
  	  	  this.mouseover = false;
	  	  $('.card').not(this.$el).animate({'opacity':'1'},500);
  	  }
  },
 
  tagName: "div",
  className: "card",
  destroy: function () {
    this.model.distory();
    this.remove();
    return false;
  },

  render: function() {

  	var that = $(this.el);
    that.html(this.template(this.model.toJSON() ));
    
    that.mosaic({'animation':'slide'});

    
    setTimeout(function(){
    
	   	var shortdesc = that.find('.app-short-description');
		shortdesc.css('bottom', '-' + shortdesc.outerHeight()+'px');
		
		that.mosaic({'animation':'slide'});
		    
	    var appDetail = $.ajax({url:'assets/data/app-id2.json', dataType: 'text json',  success: function(data) {
	      var popupModel = new AppFinder.Models.App(data);
	      var popupView = new AppFinder.Views.WaterfallApps.PopupView({model: popupModel});
	      that.find('img,.app-short-description').bind("click", function(){ 
          TINY.box.show({html:popupView.render().el,width:'800',animate:true,openjs:function(){
          	
          	position = $('body').offset();
          	container.css('top', -position.top + 'px');
          	activePosition = position.top;
          	scrollPosition = $('body').scrollTop();
          	$('body').css("position","fixed").css("overflow", "auto").css('width', '100%').css('top', -scrollPosition+'px');
          	$('body').scrollTop(scrollPosition);
          }, closejs:function() { $('body').css('position','').css('overflow','').css('width','').css('top',''); $('body').scrollTop(scrollPosition)}});
        });
      }});

    },0);
    
     

    return this;
  }
    
});
  

  

  

  
