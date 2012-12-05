AppFinder.Views.NewAppView = Backbone.View.extend({
	template: JST["backbone/templates/register/new_app"],
	className:"accordion-group",
	tagName : "div",
		events : {
		"click #populate" : "populateApp"
	},

	populateApp : function(e) {
		e.preventDefault();
		var app = new AppFinder.Models.App({appId:2});
		new AppFinder.Views.AppDetailsView({model:app});
		
	},
  	initialize : function() {
  		
  		$("#accordionApps").append(this.render().el); 
  	},
  	render: function() {
		$(this.el).html(this.template());
  		return this;
  	}
});