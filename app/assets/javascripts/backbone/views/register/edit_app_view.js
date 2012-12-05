

AppFinder.Views.EditAppView = Backbone.View.extend({
	template: JST["backbone/templates/register/edit_app"],
	className:"accordion-group",
	tagName : "div",
  	initialize : function() {
  		
  		if(this.model.get("appId") != null) {
  			this.model.url = 'assets/data/app-id'+"2.json";
  			this.model.fetch();
  		}
  		this.model.on('change', function() { $("#accordionApps").append(this.render().el); } ,this );
  	},
  	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));
  		return this;
  	}
});