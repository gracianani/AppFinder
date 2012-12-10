

AppFinder.Views.EditAppView = Backbone.View.extend({
	template: JST["backbone/templates/register/edit_app"],
	className:"accordion-group",
	tagName : "div",
  	initialize : function() {
  		
  		if(this.model.get("id") != null) {
  			var appId = this.model.get("id") ;
  			$(this.el).attr("Id", "appId-" + appId);
  			
  		}
  		this.model.on('change', this.render ,this );
  	},
  	render: function() {
  		
		$(this.el).html(this.template(this.model.toJSON()));
  		return this;
  	}
});