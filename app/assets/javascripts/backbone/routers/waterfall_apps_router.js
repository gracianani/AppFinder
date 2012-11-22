AppFinder.Routers.WaterfallAppsRouter = Backbone.Router.extend( {
  initialize: function (options) {
    this.waterfallApps = new AppFinder.Collections.AppsCollection(options.waterfallApps);
    this.waterfallApps.reset( options.waterfallApps );
    this.filters = new AppFinder.Collections.Filters();
    this.filters.reset( options.filters );
    this.highlights = new AppFinder.Models.Highlight(options.highlights);
  },
  routes: {
    "new"      : "newWaterfallApps",
    
    "index"    : "index",
    "p:page" : "page",
    ":id/edit" : "edit",
    ":id"      : "show",
    
    ".*"        : "index"
  },
  page : function(page) {
  	console.log("page");
  	this.view = new AppFinder.Views.WaterfallApps.IndexView({waterfallApps: this.waterfallApps});
  	console.log($('#waterfall_apps').html());
  	 $('#waterfall_apps').append(this.view.render().el);
  },
  newWaterfallApps: function() {
    this.view = new AppFinder.Views.WaterfallApps.NewView({collection: this.waterfallApps});
    $("#waterfall_apps").html(this.view.render().el);
  },
  index: function() {
  	console.log("index");
    this.view = new AppFinder.Views.WaterfallApps.IndexView({waterfallApps: this.waterfallApps});
    $("#waterfall_apps").html(this.view.render().el);
    this.filterView = new AppFinder.Views.Filters.FiltersView({filters: this.filters});
    $(this.filterView.render().el).insertAfter('#filterAnchor');
    this.highlightsView = new AppFinder.Views.Highlights.HighlightsView({model: this.highlights});
    $(this.highlightsView.render().el).insertAfter('#highlightsAnchor');
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