AppFinder.Routers.WaterfallAppsRouter = Backbone.Router.extend( {
  initialize: function (options) {
    this.waterfallApps = new AppFinder.Collections.AppsCollection(options.waterfallApps);
    this.waterfallApps.reset( options.waterfallApps );
   
  },
  routes: {
    "new"      : "newWaterfallApps",
    "index"    : "index",
    ":id/edit" : "edit",
    ":id"      : "show",
    ".*"        : "index"
  },

  newWaterfallApps: function() {
    this.view = new AppFinder.Views.WaterfallApps.NewView({collection: this.waterfallApps});
    $("#waterfall_apps").html(this.view.render().el);
  },
  index: function() {
    this.view = new AppFinder.Views.WaterfallApps.IndexView({waterfallApps: this.waterfallApps});
    $("#waterfall_apps").html(this.view.render().el);
  },
  show: function(id){ 
    waterfallApps = this.waterfallApps.get(id);

    this.view = new AppFinder.Views.WaterfallApps.ShowView({model: waterfallApps});
    $("#waterfall_apps").html(this.view.render().el);
  },
  edit: function(id) { 
    waterfall_apps = this.waterfallApps.get(id);

    this.view = new AppFinder.Views.WaterfallApps.EditView({model: waterfallApps});
    $("#waterfall_apps").html(this.view.render().el);
  }
});