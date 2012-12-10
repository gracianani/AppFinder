AppFinder.Views.FilterBoxView = AppFinder.Views.FilterBoxView || {};

AppFinder.Views.FilterBoxView = Backbone.View.extend({
    initialize: function(options){
    	this.collection.on('add', this.addOne, this);
      	this.collection.on('reset', this.addAll, this);
    },
    tagName : "div",
    id: "filter-box",
    className : "clearfix",
    addAll: function() {
	  	$(this.el).html("");
	    this.collection.forEach(this.addOne,this); 
	    this.render();
	},
    addOne : function(filter) {
    	var filterType = filter.get("type");
    	var filterView;
    	if(filterType == "app_category") {
    		filterView = new AppFinder.Views.AppCategoryView({model : filter});
    	}
    	else if(filterType == "app_tags") {
    		filterView = new AppFinder.Views.AppTagsView({model:filter});
    	}
    	else if(filterType == "app_badges") {
    		filterView = new AppFinder.Views.AppBadgesView({model:filter});
    	}
    	else if(filterType == "app_devices") {
    		filterView = new AppFinder.Views.AppDevicesView();
    	}
    	else if(filterType == "app_price") {
    		filterView = new AppFinder.Views.AppPriceView();
    	}
    	else if(filterType == "app_ratings") {
    		filterView = new AppFinder.Views.AppRatingsView();
    	}
    	else if(filterType == "app_release_date") {
    		filterView = new AppFinder.Views.AppReleaseDateView();
    	}
    	else if(filterType == "search_keywords") {
    		filterView = new AppFinder.Views.SearchKeywordsView({model: filter});
    	}
    	else if (filterType == "location") {
    		filterView = new AppFinder.Views.LocationView();
    	}
    	else if(filterType == "developer_app_count"){
    		filterView = new AppFinder.Views.DeveloperAppCountView();
    	}
    	else if(filterType == "developer_sort_by"){
    		filterView = new AppFinder.Views.DeveloperSortByView();
    	}
    	else if(filterType == "developer_budget"){
    		filterView = new AppFinder.Views.DeveloperBudgetView();
    	}
    	else {
    		return this;
    	}
    	if(filter.get('url') !== undefined){
	    	filter.url = filter.get('url');
	    	//console.log('fetch...'+ filter.get("type"));
	    	filter.fetch();
	    	filter.change();
    	}
		$(this.el).append(filterView.el);
 		return this;
    },
	render: function(){

		return this;
	}
});