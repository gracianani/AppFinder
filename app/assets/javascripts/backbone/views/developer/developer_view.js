AppFinder.Views.Developer = AppFinder.Views.Developer || {};

AppFinder.Views.Developer.DeveloperView = Backbone.View.extend({
  
  template: JST["backbone/templates/developer/developer"],
  tagName: "div",
  className: "developer",
  
  initialize : function() {},
  render: function() {
  	var that = this;
  	var $el = $(this.el);
    $el.html(this.template(this.model.toJSON() ));
    return this;
  }
  
});