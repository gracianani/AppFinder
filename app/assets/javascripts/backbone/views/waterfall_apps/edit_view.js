AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.EditView = Backbone.View.extend ( {
  template : JST["backbone/templates/waterfall_apps/edit"],
  events : {
    "submit #edit-waterfall_apps" : "update"
  },
  update : function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.model.save(null,
      { success:function(waterfall_apps) {
        this.model = waterfall_apps;
        window.location.hash = "/#{this.model.id}"
      } }
    );
  },
  render : function ()
  {
    $(this.el).html(this.template(this.model.toJSON() ));
    this.$("form").backboneLink(this.model);
    return this;
  }
}); 
  
    

    
