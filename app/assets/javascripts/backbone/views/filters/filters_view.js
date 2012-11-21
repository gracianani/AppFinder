AppFinder.Views.Filters = AppFinder.Views.Filters || {};

AppFinder.Views.Filters.FiltersView = Backbone.View.extend({
  template: JST["backbone/templates/filters/search"],
  events: {},
  tagName : "div",
  className : "container",
  id: "filter",
  render: function(){
  	$(this.el).html(this.template());
  	
  	return this;
  }
});