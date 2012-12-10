AppFinder.Views.AppPriceView = AppFinder.Views.AppPriceView || {};

AppFinder.Views.AppPriceView = Backbone.View.extend({
	template: JST["backbone/templates/filters/app_price"],
    initialize: function(){
	  this.render();
    },
    tagName : "div",
    id: "filter-price",
    title:"Price",
    className : "filter-btn smlDropdown",
    render: function(){
    	$(this.el).html(this.template());
    	$(this.el).find("#filter-price .tag").bind('click', function(e) {
			$(this).toggleClass("active");
		});
		$(this.el).smlDropdown();
		$(this.el).attr("title", this.title).tooltip();	
			
    	return this;
    }
});