AppFinder.Views.AppBadgesView = AppFinder.Views.AppBadgesView || {};

AppFinder.Views.AppBadgesView = Backbone.View.extend({
	template: JST["backbone/templates/filters/app_badges"],
    initialize: function(){
	  this.model.on('change',this.render,this);
    },
    tagName : "div",
    id: "filter-badge",
    className : "filter-btn smlDropdown",
    render: function(){
    	var that = this;
    	$(this.el).html(this.template(this.model.toJSON()));
		setTimeout (function(){
    		$("#filter-badges-select").chosen();
		},0);
    	return this;
    }
});