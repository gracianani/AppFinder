AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.IndexView = Backbone.View.extend ({
  
  template: JST["backbone/templates/waterfall_apps/index"],

  initialize: function ()  {
      this.options.waterfallApps.bind('reset', this.addAll); 
  },

  addAll: function() {
    this.options.waterfallApps.each(this.addOne); 
  },
  addOne: function(waterfallApps) {
    view = new AppFinder.Views.WaterfallApps.WaterfallAppsView({model : waterfallApps});
    
    $('#waterfallApps').append(view.render().el);
  },
  render: function() {
    $(this.el).html(this.template( {waterfallApps: this.options.waterfallApps.toJSON() }) ); 
    this.addAll();
    return this;
  }
  
});
  