AppFinder.Views.AppFilterView = AppFinder.Views.AppFilterView || {};

AppFinder.Views.AppFilterView = Backbone.View.extend({
    initialize: function(){
    	this.filterSummaryView = new AppFinder.Views.FilterSummary();
    	this.filtersView = new AppFinder.Views.FilterBoxView({collection: this.collection});
		this.collection.on("reset", this.render, this);
		this.collection.reset([
		  {url: "/assets/data/app-category.json", type:"app_category"},
		  {url: "/assets/data/app-tags.json", type: "app_tags"},
		  {url: "/assets/data/app-badges.json", type:"app_badges"},
		  {type:"app_price"},
		  {type:"app_ratings"},
		  {type:"app_devices"},
		  {type:"app_release_date"},
		  {url: "/assets/data/app-names.json", type:"search_keywords"}
		]);
    },
    tagName : "div",
    id: "filters",
    className: "container",
    render: function(){
    	$(this.el).append( this.filtersView.el);
    	$(this.el).append( this.filterSummaryView.el);
    	return this;
    }
});