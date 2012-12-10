AppFinder.Views.SearchKeywordsView = AppFinder.Views.SearchKeywordsView || {};

AppFinder.Views.SearchKeywordsView = Backbone.View.extend({
	template: JST["backbone/templates/filters/search_keywords"],
    initialize: function(){
		this.model.on("change", this.render, this);
    },
    tagName : "div",
    className : "filter-btn form-search",
    id: "filter-keyword",
    render: function(){
    	$(this.el).html(this.template());
    	var that = this;
    	var names = $.map(this.model.toJSON(), function (value) {
            return value.appName;
        });

    	setTimeout( function() {
	    	$('#filter-keyword > .search-query').autocomplete({
	            lookup: names,
	            onSelect: function (suggestion) {
	            	console.log(suggestion);
	            }
	        });
    	});
    	return this;
    }
});