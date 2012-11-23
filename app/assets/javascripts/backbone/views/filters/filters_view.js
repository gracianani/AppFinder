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
    console.log(this.options.filters.toJSON());
  	$(this.el).html(this.template(this.options.filters.toJSON()[0]));
	setTimeout( function (){
		
		$(".chzn-select").chosen();
		//$('.dropdown-toggle').dropdown();
		$('.smlDropdown').smlDropdown();
	}, 0);
  	
  	return this;
  }
});