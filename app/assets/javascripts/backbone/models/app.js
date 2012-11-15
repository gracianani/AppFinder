AppFinder.Models.App = Backbone.Model.extend({
	
}) ;


AppFinder.Collections.AppsCollection = Backbone.Collection.extend({
  url: '/apps',
  model: AppFinder.Models.App
}) ;
  
