

AppFinder.Views.SearchKeywordsView = AppFinder.Views.SearchKeywordsView || {};

AppFinder.Views.SearchKeywordsView = Backbone.View.extend({
	template: JST["backbone/templates/filters/search_keywords"],
    initialize: function(){
	  this.render();
    },
    tagName : "div",
    className : "filter-btn form-search",
    id: "filter-keyword",
    render: function(){
    	console.log("keywords");
    	$(this.el).html(this.template());
    	return this;
    }
});