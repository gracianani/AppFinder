AppFinder.Views.AppReleaseDateView = AppFinder.Views.AppReleaseDateView || {};

AppFinder.Views.AppReleaseDateView = Backbone.View.extend({
	template: JST["backbone/templates/filters/app_release_date"],
    initialize: function(){
	  this.render();
    },
    tagName : "div",
    id: "filter-time",
    title:"Release Date",
    className : "filter-btn smlDropdown",
    render: function(){
    	$(this.el).html(this.template());
    	$(this.el).smlDropdown();
		$(this.el).attr("title", this.title).tooltip();
    	return this;
    }
});