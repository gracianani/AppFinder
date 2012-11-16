AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.WaterfallAppsView = Backbone.View.extend({
  template: JST["backbone/templates/waterfall_apps/waterfall_apps"],
  events: {
    "click .destroy" : "destroy",
    "click a.btn" : "toggleShareMenu",
    "mouseover img" : "showDescription",
    "mouseout img" : "hideDescription", 
    "mouseout .app-short-description" : "hideDescription", 
    "mouseover .app-short-description" : "showDescription" ,
    "mouseout .hover-overlay" : "hideDescription", 
    "mouseover .hover-overlay" : "showDescription", 
    "click div.app-like" : "toggleLike"
  },
  initialize : function(){
    this.short_description_active = false;
  },
  toggleLike : function() {
    this.model.toggle_like();
    this.model.save();
    this.render();
  },
  toggleShareMenu : function() {
      var menuShare = $(this.el).find(".menu-share");
      if (menuShare.is(":visible")) {
          menuShare.fadeOut();
      } else {
          menuShare.fadeIn();
      }
  },
  hideDescription : function(e) {
      var short_description = $(this.el).find(".app-short-description");
      var that = this;
      if(this.short_description_active == true && !short_description.find('span').is(":hover") ) {
          this.short_description_active = false;
          setTimeout(function() {
            if(that.short_description_active== false) {
              short_description.fadeOut(100, function() {that.short_description_active = false} ); } }, 200);
      } 
  },
  showDescription : function(e){
    var that = this;
    if(this.short_description_active == false) {
      that.short_description_active = true;
      var short_description = $(this.el).find(".app-short-description");
      short_description.fadeIn( 100 , function() {
        that.short_description_active = true;
      });
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
    this.model.fetch();
    $(this.el).html(this.template(this.model.toJSON() ));
    return this;
  }
    
});
  

  

  

  
