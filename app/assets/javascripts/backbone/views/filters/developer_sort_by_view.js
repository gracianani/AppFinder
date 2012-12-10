AppFinder.Views.DeveloperSortByView = AppFinder.Views.DeveloperSortByView || {};

AppFinder.Views.DeveloperSortByView = Backbone.View.extend({
	template: JST["backbone/templates/filters/developer_sort_by"],
    initialize: function(){
	  this.render();
    },
    tagName : "div",
    id: "filter-sortBy",
    title:"SortBy",
    className : "filter-btn smlDropdown",
    render: function(){
    	$(this.el).html(this.template());
    	$(this.el).smlDropdown();
		$(this.el).attr("title", this.title).tooltip();
    	return this;
    }
});