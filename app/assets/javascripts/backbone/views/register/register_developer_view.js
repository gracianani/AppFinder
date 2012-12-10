

AppFinder.Views.RegisterDeveloperView = Backbone.View.extend({
	template: JST["backbone/templates/register/register_developer"],
  	tagName : "form",
  	className: "form-horizontal",
  	id: "register-developer",
  	events: {
  		"click #save" : "saveApp"
  	},
  	saveApp : function(){
  		var appId = this.newAppView.model.get("id");
  		this.newAppView.remove();
  		this.editApp(appId);
  		this.addNewApp();
  		
  	},
  	editApp: function(appId) {
  		var app = new AppFinder.Models.App({Id:appId});
		var editView = new AppFinder.Views.EditAppView({model:app});
		app.url = 'assets/data/app-id'+ appId +".json";
  		app.fetch();
  		this.apps.push(editView);
  		$("#accordionApps").append(editView.el);
  	},
	addNewApp : function() {
		var app = new AppFinder.Models.App();
		this.newAppView = new AppFinder.Views.NewAppView({model:app});
		$("#accordionApps").append(this.newAppView.el);
	},	
  	initialize : function() {
  		$("#register").html(this.render().el);
  		this.apps = [];
  		this.addNewApp();
  	},
  	render: function() {
  		$(this.el).html(this.template());
  		return this;
  	}
});