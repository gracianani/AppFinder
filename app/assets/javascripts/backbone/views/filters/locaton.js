AppFinder.Views.LocationView = AppFinder.Views.LocationView || {};

AppFinder.Views.LocationView = Backbone.View.extend({
	template: JST["backbone/templates/filters/location"],
    initialize: function(){
    	this.render();
    },
    tagName : "div",
    id: "filter-lan",
    className: "filter-btn smlDropdown",
    title : "Developer's Location",
    rel : "tooltip",
    render: function(){
    	$(this.el).html(this.template());
    	return this;
    }
});