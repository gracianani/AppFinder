AppFinder.Views.Developer = AppFinder.Views.Developer || {};

AppFinder.Views.Developer.IndexView = Backbone.View.extend ({
  
  template: JST["backbone/templates/developer/index"],
  tagName : "div",
  className : "container",
  initialize: function ()  {
  	  $('#loadingContainer').show();
      $(this.el).html(this.template());
      this.collection.on('add', this.addOne, this);
      this.collection.on('reset', this.addAll, this);
      this.developers = $(this.el).find('#developers');
  	
  },

  addAll: function() {
  	this.developers.html("");
    this.collection.forEach(this.addOne,this); 
    this.render();
    $('#loadingContainer').hide();
  },
  
  addOne: function(developer) {
    view = new AppFinder.Views.Developer.DeveloperView({model : developer});
    this.developers.append(view.render().el);
 	return view;
  },
  
  render: function() {
  	
   return this;

  }
  
});