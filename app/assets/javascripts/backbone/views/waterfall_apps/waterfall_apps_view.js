AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.WaterfallAppsView = Backbone.View.extend({
  template: JST["backbone/templates/waterfall_apps/waterfall_apps"],
  events: {
    "click .destroy" : "destroy",
    "click .app-share-btn" : "toggleShareMenu",
    "click div.app-like" : "toggleLike",
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
	      that.find('img').bind("click", function(){ 
          TINY.box.show({html:popupView.render().el,boxid:'frameless',animate:true,openjs:function(){
          	
          	$('body').css("position","fixed").css("overflow", "auto").css('height', $(window).height() + 'px')
          }}); 
      });

    },0);
    
     

    return this;
  }
    
});
  

  

  

  
