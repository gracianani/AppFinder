AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.LoginView = Backbone.View.extend({
	template: JST["backbone/templates/login"],
  	tagName : "div",
  	id: "login",
  	initialize : function() {
  		$("#login-view").html(this.render().el);
  	},
  	render: function() {
  		$(this.el).html(this.template());
  		return this;
  	}
});