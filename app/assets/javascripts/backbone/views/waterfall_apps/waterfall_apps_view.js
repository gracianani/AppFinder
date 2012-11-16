AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.WaterfallAppsView = Backbone.View.extend({
  template: JST["backbone/templates/waterfall_apps/waterfall_apps"],
  events: {
    "click .destroy" : "destroy",
    "hover img": "showDescription"
  },
  showDescription : function(){
    var short_description = $(this.el).find(".app-short-description");
    if(short_description.css("display") == "none") {
      short_description.css("display", "block");
    }
    else {
      short_description.css("display", "none");
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
  

  

  

  
