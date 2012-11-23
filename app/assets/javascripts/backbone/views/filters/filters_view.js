AppFinder.Views.Filters = AppFinder.Views.Filters || {};

AppFinder.Views.Filters.FiltersView = Backbone.View.extend({
  template: JST["backbone/templates/filters/search"],
  events: {
	  "click .filter-tag-link" : 'clickTagLink'
  },
  tagName : "div",
  className : "container",
  id: "filter",
  clickTagLink:function(e){

  	
  },
  render: function(){
  	$(this.el).html(this.template(this.options.filters.toJSON()[0]));
  	var that = this;
	setTimeout( function (){

		$("#filter-category-select").chosen({allow_single_deselect: true, selectedTo: "#filter-category-result"});
		$("#filter-feature-select").chosen({allow_single_deselect: true, selectedTo: "#filter-feature-result"});
		$("#filter-tags-select,#filter-country-select").chosen();
		//$(".chzn-select").chosenForTappollo({allow_single_deselect: true});
		$('.smlDropdown').smlDropdown();
		
		that.$el.find('.filter-tag-link').bind('click',function(e){
		  	e.preventDefault();
		  	var tagValue = $(e.target).html();
		  	var selector = $('#filter-tags-select');
		  	selector.find('option[value="'+tagValue+'"]').attr('selected','1');
		  	selector.trigger("liszt:updated");
		});
	}, 0);
  	
});