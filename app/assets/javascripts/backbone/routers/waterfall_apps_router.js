AppFinder.Routers.WaterfallAppsRouter = Backbone.Router.extend( {
  initialize: function (options) {
    this.waterfallApps = new AppFinder.Collections.AppsCollection(options.waterfallApps);
    this.waterfallApps.reset( options.waterfallApps );
    this.filters = new AppFinder.Collections.Filters();
    this.filters.reset( options.filters );
    this.highlights = new AppFinder.Models.Highlight(options.highlights);
  },
  routes: {
    
    "index"    : "index",
    "id:id&popup" : "popup",
    "id:id"      : "show",
    ".*"        : "index"
  },

  index: function() {
  	if($(".tbox").length > 0 ) {
  		TINY.box.hide();
  	}
  	if(this.indexView == null || typeof(this.indexView) == "undefined" ) {
  		
	    this.indexView = new AppFinder.Views.WaterfallApps.IndexView({waterfallApps: this.waterfallApps});
	    this.indexView.render();
	    this.filterView = new AppFinder.Views.Filters.FiltersView({filters: this.filters});
		$(this.filterView.render().el).insertAfter('#filterAnchor');
	    $("#filterAnchor").remove();
	    
	    this.highlightsView = new AppFinder.Views.Highlights.HighlightsView({model: this.highlights});
	    $(this.highlightsView.render().el).insertAfter('#highlightsAnchor');
	    $("#highlightsAnchor").remove();
	   // $('#loading').hide();
    }
    
  },
  show: function(id){ 
  	$('#loading').show();
    var waterfallApp = this.waterfallApps.get(id);

    var appDetail = $.ajax({url:'assets/data/app-id2.json', dataType: 'text json',  success: function(data) {
       
       var showModel = new AppFinder.Models.App(data);
       var showView = new AppFinder.Views.WaterfallApps.ShowView({model: showModel});
       $("#waterfallApps").html(showView.render().el);
       $('#loading').hide();
    }});
  },
  popup: function(id) {
 	if(this.indexView == null || typeof(this.indexView ) == undefined) {
 		this.indexView = new AppFinder.Views.WaterfallApps.IndexView({waterfallApps: this.waterfallApps});
    	this.indexView.render();
 	}
  	 var appDetail = $.ajax({url:'assets/data/app-id2.json', dataType: 'text json',  success: function(data) {
	 	var popupModel = new AppFinder.Models.App(data);
	    var popupView = new AppFinder.Views.WaterfallApps.PopupView({model: popupModel});
	   	
    	}
    });
  }
});