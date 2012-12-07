
AppFinder.Views.DeveloperAppCountView = AppFinder.Views.DeveloperAppCountView || {};

AppFinder.Views.DeveloperAppCountView = Backbone.View.extend({
	template: JST["backbone/templates/filters/developer_app_count"],
    initialize: function(){
    	this.attr("title", this.title);
    	this.attr("rel", this.rel);
    	this.render();
    },
    tagName : "div",
    id: "filter-app",
    className : "filter-btn smlDropdown",
    title:"How Many Apps",
    rel:"tooltip",
    render: function(){
    	$(this.el).html(this.template());
    	setTimeout( function (){

			$("#filter-country-select,#filter-city-select,#filter-province-select,#filter-distance-select").chosen();
	
    	}, 0);
    	return this;
    }
});
