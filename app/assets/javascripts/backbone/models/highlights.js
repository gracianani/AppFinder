AppFinder.Models.Highlight = Backbone.Model.extend({
	url: 'assets/data/highlights.json',
	parse: function(response){
		console.log(response);
       return response;
    }
}) ;


AppFinder.Collections.HighlightsCollection = Backbone.Collection.extend({
  model: AppFinder.Models.Highlight
}) ;
  
