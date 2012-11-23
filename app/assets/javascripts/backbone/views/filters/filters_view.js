AppFinder.Views.Filters = AppFinder.Views.Filters || {};

AppFinder.Views.Filters.FiltersView = Backbone.View.extend({
  template: JST["backbone/templates/filters/search"],
  events: {
	  "click .filter-btn" : 'toggleFilterBtn'
  },
  tagName : "div",
  className : "container",
  id: "filter",
  toggleFilterBtn:function(e){
	  //$(e.currentTarget).toggleClass('over');
  },
  render: function(){
  	$(this.el).html(this.template(this.options.filters.toJSON()[0]));
	setTimeout( function (){

		$("#filter-category-select").chosen({allow_single_deselect: true, selectedTo: "#filter-category-result"});
		$("#filter-feature-select").chosen({allow_single_deselect: true, selectedTo: "#filter-feature-result"});
		//$(".chzn-select").chosenForTappollo({allow_single_deselect: true});
		$('.smlDropdown').smlDropdown();
	}, 100);
 
  	return this;
  }
});