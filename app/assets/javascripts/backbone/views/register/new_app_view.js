AppFinder.Views.NewAppView = Backbone.View.extend({
	template: JST["backbone/templates/register/new_app"],
	className:"accordion-group",
	tagName : "div",
	events : {
		"blur #inputAppUrl" : "populateAppByUrl"
	},
	populateAppByUrl : function(e) {
		var lookup = new AppFinder.Models.Filter();
  		lookup.url = "assets/data/app-id3.json";
  		var that = this;
  		lookup.fetch({success: 
  			function(data, response) {
				that.fillAppDetails(data, that);
  			}
  		}); 
	},
  	initialize : function() {
  		var that = this;
  		var appNames = new AppFinder.Models.Filter();
  		// the datasource for the AUTO COMPLETE
  		appNames.url = "assets/data/app-names.json";
  		appNames.fetch({success: 
  			function(data, response) {
  				that.bindAppName(data, that);
  			} 
  		}); 
  		this.render();
  	},
  	bindAppName : function(data, that){
  		var appData = data.toJSON(),
  			appNames = $.map( appData, function(item) {
  			return item.appName;
  		});
  		$(that.el).find("#inputAppName").autocomplete({
            lookup: appNames,
            onSelect: function (suggestion) {
            	var index = $.inArray(suggestion, appNames);
            	if(index != null && index !== undefined){
            		var appId = appData[index].appId;
            			app = new AppFinder.Models.App({id:appId});
					new AppFinder.Views.AppDetailsView({model:app});
					app.url = 'assets/data/app-id'+ appId +".json";
					app.fetch();
					that.model.set("id", appId);
            	}
            	
            }
        });
  	},
  	fillAppDetails : function(data, that) {
		var	app = new AppFinder.Models.App(data.toJSON());
		new AppFinder.Views.AppDetailsView({model:app});
		app.trigger('change');
		that.model.set("id", data.id);
  	},
  	render: function() {
		$(this.el).html(this.template());
  		return this;
  	}
});