AppFinder.Models.Filter = Backbone.Model.extend({});

AppFinder.Collections.Filters = Backbone.Collection.extend ({
  model: AppFinder.Models.Filter,
  url: '/filters'
});
