AppFinder.Views.AppRatingsView = AppFinder.Views.AppRatingsView || {};

AppFinder.Views.AppRatingsView = Backbone.View.extend({
	template: JST["backbone/templates/filters/app_ratings"],
    initialize: function(){
	  this.render();
    },
    tagName : "div",
    id: "filter-rating",
    title:"Ratings",
    className : "filter-btn smlDropdown",
    render: function(){
    	$(this.el).html(this.template());
    	setTimeout(function() {
    		$('#filter-rating-low').raty({
			'half':true,
			'score':1,
			'targetKeep':true,
			'target':'#filter-rating-low-hint',
			'targetType' : 'number'
			});
			$('#filter-rating-high').raty({
				'half':true,
				'score':5,
				'targetKeep':true,
				'target':'#filter-rating-high-hint',
				'targetType' : 'number'
			});
    	}, 0);
    	$(this.el).smlDropdown();
		$(this.el).attr("title", this.title).tooltip();
    	return this;
    }
});