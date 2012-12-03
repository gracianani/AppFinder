AppFinder.Models.Developer = Backbone.Model.extend({

}) ;


AppFinder.Collections.DevelopersCollection = Backbone.Collection.extend({
  url: '/assets/data/developer.json',
  model: AppFinder.Models.Developer
}) ;