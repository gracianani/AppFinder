AppFinder.Routers.WaterfallAppsRouter = Backbone.Router.extend( {
  initialize: function (options) {
    this.waterfallApps = new AppFinder.Collections.AppsCollection(options.waterfallApps);
    this.waterfallApps.reset( options.waterfallApps );
    this.filters = new AppFinder.Collections.Filters();
    this.filters.reset( options.filters );
    this.highlights = new AppFinder.Models.Highlight(options.highlights);
  },
  routes: {
    "new"      : "newWaterfallApps",
    
    "index"    : "index",
    ":id/edit" : "edit",
    "id:id&popup" : "popup",
    "id:id"      : "show",
    ".*"        : "index"
  },
  newWaterfallApps: function() {
    this.newView = new AppFinder.Views.WaterfallApps.NewView({collection: this.waterfallApps});
    $("#waterfall_apps").html(this.view.render().el);
  },
  index: function() {
  	if($(".tbox").length > 0 ) {
  		TINY.box.hide();
  	}
  	if(this.indexView == null || typeof(this.indexView) == "undefined" ) {
  		console.log("init");
	    this.indexView = new AppFinder.Views.WaterfallApps.IndexView({waterfallApps: this.waterfallApps});
	    this.indexView.render();
	    this.filterView = new AppFinder.Views.Filters.FiltersView({filters: this.filters});

	    $(this.filterView.render().el).insertAfter('#filterAnchor');
	    $("#filterAnchor").remove();
	    this.highlightsView = new AppFinder.Views.Highlights.HighlightsView({model: this.highlights});
	    $(this.highlightsView.render().el).insertAfter('#highlightsAnchor');
	    $("#highlightsAnchor").remove();
    }
    
  },
  show: function(id){ 
    var waterfallApp = this.waterfallApps.get(id);

    var appDetail = $.ajax({url:'assets/data/app-id2.json', dataType: 'text json',  success: function(data) {
       
       var showModel = new AppFinder.Models.App(data);
       var showView = new AppFinder.Views.WaterfallApps.ShowView({model: showModel});
       $("#waterfallApps").html(showView.render().el);
    }});
  },
  popup: function(id) {
    //var indexView = new AppFinder.Views.WaterfallApps.IndexView({waterfallApps: this.waterfallApps});
    //indexView.render();
    console.log("popup" + this.indexView);
 	if(this.indexView == null || typeof(this.indexView ) == undefined) {
 		this.indexView = new AppFinder.Views.WaterfallApps.IndexView({waterfallApps: this.waterfallApps});
    	this.indexView.render();
 	}
  	 var appDetail = $.ajax({url:'assets/data/app-id2.json', dataType: 'text json',  success: function(data) {
	 	var popupModel = new AppFinder.Models.App(data);
	    var popupView = new AppFinder.Views.WaterfallApps.PopupView({model: popupModel});
	   	TINY.box.show({html:popupView.render().el,width:'940',animate:true,
	   		openjs:function(){
	      		position = $('body').offset();
	      		container.css('top', -position.top + 'px');
	      		activePosition = position.top;
	      		scrollPosition = $('body').scrollTop();
	      		$('body').css("position","fixed").css("overflow", "auto").css('width', '100%').css('top', -scrollPosition+'px');
	      		$('body').scrollTop(scrollPosition);
	      		$('.tmask').css('top',-position.top + 'px');
	      		$('.tbox').css('height',$(window).height()-100+'px');
	      		$('.tinner').css('height','100%');
			
	      	}, 
      		closejs:function() { 
      			$('body').css('position','').css('overflow','').css('width','').css('top',''); 
      			$('body').scrollTop(scrollPosition);
      			window.router.navigate("index", {trigger: false});
      		}});
    	}
    });
  },
  edit: function(id) { 
    waterfall_apps = this.waterfallApps.get(id);

    this.view = new AppFinder.Views.WaterfallApps.EditView({model: waterfallApps});
    $("#waterfall_apps").html(this.view.render().el);
  }
});