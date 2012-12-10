AppFinder.Views.AppBadgesView = AppFinder.Views.AppBadgesView || {};

AppFinder.Views.AppBadgesView = Backbone.View.extend({
	template: JST["backbone/templates/filters/app_badges"],
    initialize: function(){
	  this.model.on('change',this.render,this);
    },
    tagName : "div",
    id: "filter-badge",
    className : "filter-btn smlDropdown",
    title: "Badges",
    render: function(){
    	$el = $(this.el);
    	$el.html(this.template(this.model.toJSON()));
    	setTimeout(function(){
    		$("#filter-badges-select").chosen();
    	},0);
    	$el.smlDropdown();
		$el.attr("title", this.title).tooltip();
		
    	return this;
    }
});