AppFinder.Routers.WaterfallAppsRouter = Backbone.Router.extend( {
  initialize: function (options) {
    this.waterfallApps = new AppFinder.Collections.AppsCollection();
    this.waterfallApps.reset( options.waterfallApps );
    this.waterfallApps.add(new AppFinder.Models.App(
    {
      title:'angrybird',
      id:'1',
      icon_url: 'rails.png',
      developer: 'rovio',
      ratings: 3,
      screenshot_url : 'rails.png',
      short_description: 'angry',
      long_description: 'angry',
      like_count : 3,
      video_url : 'rails.png'
    } ));
    this.waterfallApps.add(new AppFinder.Models.App(
    {
      title:'cut the rope',
      id:'1',
      icon_url: 'rails.png',
      developer: 'disney',
      ratings: 3,
      screenshot_url : 'rails.png',
      short_description: 'cut',
      long_description: 'cut',
      like_count : 4,
      video_url : 'rails.png'
    } ));
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