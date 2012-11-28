AppFinder.Routers.WaterfallAppsRouter = Backbone.Router.extend( {
  initialize: function (options) {
    this.waterfallApps = new AppFinder.Collections.AppsCollection();
    //this.waterfallApps.reset(  );
    this.filters = new AppFinder.Models.Filters();
    //this.filters.reset(  );
    this.highlights = new AppFinder.Models.Highlight();


	this.indexView = new AppFinder.Views.WaterfallApps.IndexView({collection:this.waterfallApps});
	$('#app-view').prepend(this.indexView.el);
	
	this.filterView = new AppFinder.Views.Filters.FiltersView({model:this.filters});
	$('#app-view').prepend(this.filterView.el);
    
	this.highlightsView = new AppFinder.Views.Highlights.HighlightsView({model: this.highlights});
	$('#app-view').prepend(this.highlightsView.el);


  },
  start: function(){
	Backbone.history.start({pushStage:true});
  },
  routes: {
    
    "index"    		: 	"index",
    "id:id&popup" 	: 	"popup",
    "id:id"      	: 	"show",
    "login"			:	"login",
    ".*"        	: 	"index"
  },
  showStage:function(stageName){
	$('.stage-view.active').hide().removeClass('active');
  	$('#'+stageName+'-view').show().addClass('active');
  },
  index: function() {
  	if($(".tbox").length > 0 ) {
  		TINY.box.hide();
  	}
  	this.showStage('app');
  	
  	this.filters.fetch();
  	this.highlights.fetch();
  	this.waterfallApps.fetch();
  	

    
  },
  show: function(id){ 
  	
  	if($(".tbox").length > 0 ) {
  		TINY.box.hide();
  	}
  	
  	this.showStage('detail');

  	
	var showModel = new AppFinder.Models.App();
    var waterfallApp = this.waterfallApps.get(id);
	//todo: change id
	showModel.url = 'assets/data/app-id2.json';
	
    var showView = new AppFinder.Views.WaterfallApps.ShowView({model: showModel});
    $("#detail-view").html(showView.el);
    
    showModel.fetch();
     
  },
  popup: function(id) {
	  	//this.showStage('app');

	  	
	  	this.filters.fetch();
	  	this.highlights.fetch();
	  	this.waterfallApps.fetch();
	  	
	  	var waterfallApp = this.waterfallApps.get(id);
	  	//todo: change id
	 	var popupModel = new AppFinder.Models.App();	  		 
	 	popupModel.url = 'assets/data/app-id2.json';
	    var popupView = new AppFinder.Views.WaterfallApps.PopupView({model: popupModel});
	    
	    popupModel.fetch();

  },
  login: function(){
	    this.showStage('login');

  }
});