AppFinder.Views.Filters = AppFinder.Views.Filters || {};

AppFinder.Views.Filters.FiltersView = Backbone.View.extend({
  template: JST["backbone/templates/filters/search"],
  events: {},
  tagName : "div",
  className : "container",
  id: "filter",
  render: function(){
  	$(this.el).html(this.template(this.options.filters.toJSON()[0]));
	setTimeout( function (){
		
		$("#filter-category-select").chosen({allow_single_deselect: true, selectedTo: "#filter-category-result"});
		$("#filter-feature-select").chosen({allow_single_deselect: true, selectedTo: "#filter-feature-result"});
		//$(".chzn-select").chosenForTappollo({allow_single_deselect: true});
		$('.dropdown-toggle').dropdown();
	}, 500);
  	
  	return this;
  }
});