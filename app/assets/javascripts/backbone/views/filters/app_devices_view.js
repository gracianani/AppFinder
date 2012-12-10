AppFinder.Views.AppDevicesView = AppFinder.Views.AppDevicesView || {};

AppFinder.Views.AppDevicesView = Backbone.View.extend({
	template: JST["backbone/templates/filters/app_devices"],
    initialize: function(){
    	this.render();
    },
    tagName : "div",
    id: "filter-device",
    title:"Device",
    className : "filter-btn smlDropdown",
    render: function(){
    	$(this.el).html(this.template());
    	
    	$(this.el).smlDropdown();
		$(this.el).attr("title", this.title).tooltip();	
		
    	return this;
    }
});