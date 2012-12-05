

AppFinder.Views.RegisterDeveloperView = Backbone.View.extend({
	template: JST["backbone/templates/register/register_developer"],
  	tagName : "form",
  	className: "form-horizontal",
  	id: "register-developer",
	addNewApp : function() {
		var app = new AppFinder.Models.App({appId:2});
		new AppFinder.Views.EditAppView({model:app });
	},
  	initialize : function() {
  		$("#register").html(this.render().el);
  		this.addNewApp();
  	},
  	render: function() {
  		$(this.el).html(this.template());
  		
  		return this;
  	}
});