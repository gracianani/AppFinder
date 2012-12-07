AppFinder.Views.FilterView = AppFinder.Views.FilterView || {};

AppFinder.Views.FilterView = Backbone.View.extend({
    initialize: function(){
    	this.filterSummaryView = new AppFinder.Views.FilterSummary();
    	this.filtersView = new AppFinder.Views.FilterBoxView({collection: this.collection});
		this.collection.on("reset", this.render, this);
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