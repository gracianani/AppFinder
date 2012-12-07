AppFinder.Views.FilterSummary = AppFinder.Views.FilterSummary || {};

AppFinder.Views.FilterSummary = Backbone.View.extend({
	template: JST["backbone/templates/filters/filter_summary"],
    initialize: function(){
    	this.render();
    },
    tagName : "div",
    id: "filter-summary",
    render: function(){
    	$(this.el).html(this.template());
    	return this;
    }
});