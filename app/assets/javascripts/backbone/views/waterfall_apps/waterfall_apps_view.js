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
    "mouseover .hover-overlay" : "showDescription" 
  },
  initialize : function(){
    this.short_description_active = false;
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
    console.log(e.type + '' + e.target  + ' '+this.short_description_active);
      var short_description = $(this.el).find(".app-short-description");
      var that = this;
      if(this.short_description_active == true && !short_description.find('span').is(":hover") ) {
          short_description.fadeOut(200, function() {that.short_description_active = false} );
      } 
  },
  showDescription : function(e){
    console.log(e.type + '' + e.target + ' '+this.short_description_active );
    var that = this;
    if(this.short_description_active == false) {
      var short_description = $(this.el).find(".app-short-description");
      short_description.fadeIn( 200 , function() {
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
    $(this.el).html(this.template(this.model.toJSON() ));
    return this;
  }
    
});
  

  

  

  
