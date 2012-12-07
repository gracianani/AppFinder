
AppFinder.Models.Filter = Backbone.Model.extend ({
});

AppFinder.Collections.FiltersCollection = Backbone.Collection.extend({
  model: AppFinder.Models.Filter
  
}) ;

AppFinder.Models.Filters = Backbone.Model.extend ({
  model: AppFinder.Models.Filter,
  url: '/assets/data/filter.json'
});
