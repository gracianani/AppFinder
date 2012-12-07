AppFinder.Views.AppCategoryView = AppFinder.Views.AppCategoryView || {};

AppFinder.Views.AppCategoryView = Backbone.View.extend({
	template: JST["backbone/templates/filters/app_category"],
    initialize: function(){
	  this.model.on('change',this.render,this);
    },
    tagName : "div",
    id: "filter-category",
    className : "filter-btn smlDropdown",
    render: function(){
    	var that = this;
    	$(this.el).html(this.template(this.model.toJSON()));
		setTimeout (function(){
    		$("#filter-category-select").chosen();
    		$('.smlDropdown').smlDropdown();
		},0);
    	
    	return this;
    }
});