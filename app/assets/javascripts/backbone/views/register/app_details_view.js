AppFinder.Views.AppDetailsView = Backbone.View.extend({
	template: JST["backbone/templates/register/app_details"],
	initialize : function() {
  		
  		if(this.model.get("appId") != null) {
  			this.model.url = 'assets/data/app-id'+"2.json";
  			this.model.fetch();
  		}
  		this.model.on('change', function() {  $("#addNewApp .accordion-inner").append(this.render().el); } ,this );
  	},
  	render: function() {
  		
		$(this.el).html(this.template(this.model.toJSON()));
  		return this;
  	}
});