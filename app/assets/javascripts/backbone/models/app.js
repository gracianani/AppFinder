AppFinder.Models.App = Backbone.Model.extend({
	toggle_like: function() {
		if(this.get("like") == true) {
			this.set({"like": false});
		}
		else {
			this.set({"like": true});
		}
	}, 
	defaults : {
		like : false
	}
}) ;


AppFinder.Collections.AppsCollection = Backbone.Collection.extend({
  url: '/apps',
  model: AppFinder.Models.App
}) ;
  
