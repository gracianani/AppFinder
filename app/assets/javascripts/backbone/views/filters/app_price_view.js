AppFinder.Views.AppPriceView = AppFinder.Views.AppPriceView || {};

AppFinder.Views.AppPriceView = Backbone.View.extend({
	template: JST["backbone/templates/filters/app_price"],
    initialize: function(){
	  this.render();
    },
    tagName : "div",
    id: "filter-price",
    className : "filter-btn smlDropdown",
    render: function(){
    	$(this.el).html(this.template());
    	var that = this;
    	setTimeout(function() {
    		that.$el.find("#filter-price .tag").bind('click', function(e) {
			$(this).toggleClass("active");
			});
			
			
    	})
    	return this;
    }
});