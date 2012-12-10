AppFinder.Views.AppDevicesView = AppFinder.Views.AppDevicesView || {};

AppFinder.Views.AppDevicesView = Backbone.View.extend({
	template: JST["backbone/templates/filters/app_devices"],
    initialize: function(){
    	this.render();
    },
    tagName : "div",
    id: "filter-device",
    className : "filter-btn smlDropdown",
    render: function(){
    	$(this.el).html(this.template());
    	setTimeout(function() {
    		$('.smlDropdown').smlDropdown();
    	},0);
    	return this;
    }
});