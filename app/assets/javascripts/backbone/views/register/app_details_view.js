AppFinder.Views.AppDetailsView = Backbone.View.extend({
	template: JST["backbone/templates/register/app_details"],
	initialize : function() {
  		var appId = this.model.get("id");
  		$(this.el).attr("Id", "appId-" + appId);
  		
  		this.model.on('change', function() { 
  			$("#addNewApp .accordion-inner")
  				.find("div[id*=appId]").remove();
  			$("#addNewApp .accordion-inner")
  				.append(this.render().el);	
  		 } ,this );
  	},
  	render: function() {
  		console.log(this.model.toJSON());
		$(this.el).html(this.template(this.model.toJSON()));
  		return this;
  	}
});