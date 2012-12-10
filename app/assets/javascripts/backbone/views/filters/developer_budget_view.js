AppFinder.Views.DeveloperBudgetView = AppFinder.Views.DeveloperBudgetView || {};

AppFinder.Views.DeveloperBudgetView = Backbone.View.extend({
	template: JST["backbone/templates/filters/developer_budget"],
    initialize: function(){
    	this.render();
    },
    tagName : "div",
    id: "filter-budget",
    title:"Budget",
    className : "filter-btn smlDropdown",
    render: function(){
    	$(this.el).html(this.template());
    	
    	$(this.el).smlDropdown();
		$(this.el).attr("title", this.title).tooltip();	
		
    	return this;
    }
});