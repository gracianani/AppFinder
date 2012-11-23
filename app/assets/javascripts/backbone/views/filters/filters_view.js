AppFinder.Views.Filters = AppFinder.Views.Filters || {};

AppFinder.Views.Filters.FiltersView = Backbone.View.extend({
  template: JST["backbone/templates/filters/search"],
  events: {

  },
  tagName : "div",
  className : "container",
  id: "filter",
  render: function(){
    console.log(this.options.filters.toJSON());
  	$(this.el).html(this.template(this.options.filters.toJSON()[0]));
	setTimeout( function (){
		
		$(".chzn-select").chosen();
		$('.dropdown-toggle').dropdown();
		
	}, 0);
  	
  	return this;
  }
});