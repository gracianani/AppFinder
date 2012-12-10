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
    	var $el = $(this.el);
    	$el.html(this.template());
    	setTimeout(function(){
    		$el.find(".chzn-select").chosen();
    		$el.smlDropdown();
    		$el.attr("title", this.title).tooltip();
    	},0);
	
    	return this;
    }
});