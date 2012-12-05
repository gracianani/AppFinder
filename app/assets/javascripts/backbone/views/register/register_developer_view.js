

AppFinder.Views.RegisterDeveloperView = Backbone.View.extend({
	template: JST["backbone/templates/register/register_developer"],
  	tagName : "form",
  	className: "form-horizontal",
  	id: "register-developer",
  	events: {
  		"click #save" : "saveApp"
  	},
  	saveApp : function(){
  		this.newAppView.remove();
  		this.editApp(2);
  		this.addNewApp();
  	},
  	editApp: function(appId) {
  		var app = new AppFinder.Models.App({appId:appId});
		new AppFinder.Views.EditAppView({model:app});
  	},
	addNewApp : function() {
		var app = new AppFinder.Models.App();
		this.newAppView = new AppFinder.Views.NewAppView({model:app});
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