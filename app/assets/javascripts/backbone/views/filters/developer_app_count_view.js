
AppFinder.Views.DeveloperAppCountView = AppFinder.Views.DeveloperAppCountView || {};

AppFinder.Views.DeveloperAppCountView = Backbone.View.extend({
	template: JST["backbone/templates/filters/developer_app_count"],
    initialize: function(){
    	$(this.el).attr("title", this.title);
    	$(this.el).attr("rel", this.rel);
    	this.render();
    },
    tagName : "div",
    id: "filter-app",
    className : "filter-btn smlDropdown",
    title:"How Many Apps",
    rel:"tooltip",
    render: function(){
    	$(this.el).html(this.template());
    	
		
		$(this.el).smlDropdown();
		$(this.el).attr("title", this.title).tooltip();		

    	return this;
    }
});
