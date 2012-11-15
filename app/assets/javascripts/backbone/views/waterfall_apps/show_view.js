AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.ShowView = Backbone.View.extend ({
  template: JST["backbone/templates/waterfall_apps/show"],

  render: function(){
    $(this.el).html(this.template(this.model.toJSON() ));
    return this;
  }
    
});
  
