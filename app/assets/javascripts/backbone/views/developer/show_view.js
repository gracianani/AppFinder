AppFinder.Views.Developer = AppFinder.Views.Developer || {};

AppFinder.Views.Developer.ShowView = Backbone.View.extend ({
  
  template: JST["backbone/templates/developer/show"],
  tagName : "div",
  className : "devDetail detailPage container",
  initialize: function ()  {
  	 this.model.on('change',this.render,this);

  },
  render: function() {
  	$(this.el).html(this.template(this.model.toJSON()));

   return this;

  }
  
});