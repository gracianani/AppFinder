AppFinder.Views.AppCategoryView = AppFinder.Views.AppCategoryView || {};

AppFinder.Views.AppCategoryView = Backbone.View.extend({
	template: JST["backbone/templates/filters/app_category"],
    initialize: function(){
	  this.model.on('change',this.render,this);
	  $(this.el).attr("rel", this.rel);
	  $(this.el).attr("title", this.title);
    },
    title : "App Categories",
    rel:"tooltip",
    tagName : "div",
    id: "filter-category",
    className : "filter-btn smlDropdown",
    render: function(){
    	$(this.el).html(this.template(this.model.toJSON()));
    	setTimeout(function(){
	    	$el.find(".chzn-select").chosen();
    	}, 0);
    	
		$(this.el).smlDropdown();
		$(this.el).attr("title", this.title).tooltip();	
		    	
    	
    	return this;
    }
});