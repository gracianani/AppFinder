
AppFinder.Views.RegisterView = Backbone.View.extend({
	template: JST["backbone/templates/register"],
  	tagName : "div",
  	id: "register",
  	
  	initialize : function() {
  		$("#register-view").html(this.render().el);
  		
  	},
  	render: function() {
  		$(this.el).html(this.template());
  		return this;
  	}
});