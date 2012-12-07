AppFinder.Views.AppReleaseDateView = AppFinder.Views.AppReleaseDateView || {};

AppFinder.Views.AppReleaseDateView = Backbone.View.extend({
	template: JST["backbone/templates/filters/app_release_date"],
    initialize: function(){
	  this.render();
    },
    tagName : "div",
    id: "filter-time",
    className : "filter-btn smlDropdown",
    render: function(){
    	$(this.el).html(this.template());
    	return this;
    }
});