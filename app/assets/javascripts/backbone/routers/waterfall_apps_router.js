AppFinder.Routers.WaterfallAppsRouter = Backbone.Router.extend( {
  initialize: function (options) {
    this.waterfallApps = new AppFinder.Collections.AppsCollection();
    this.filters = new AppFinder.Models.Filters();
    this.highlights = new AppFinder.Models.Highlight();
	this.developers = new AppFinder.Collections.DevelopersCollection();

	this.indexView = new AppFinder.Views.WaterfallApps.IndexView({collection:this.waterfallApps});
	
	
	this.filterView = new AppFinder.Views.Filters.FiltersView({model:this.filters});
	
    
	this.highlightsView = new AppFinder.Views.Highlights.HighlightsView({model: this.highlights});
	
	
	this.loginView = new AppFinder.Views.LoginView();
	this.registerView = new AppFinder.Views.RegisterView();
	this.loadingView = new AppFinder.Views.LoadingView();
	this.developerView = new AppFinder.Views.Developer.IndexView({collection: this.developers});


  },
  start: function(){
	Backbone.history.start();
  },
  routes: {
    "index"    		: 	"index",
    "id:id&popup:video" 	: 	"popup",
    "id:id"      			: 	"show",
    "login"			:	"login",
    "developers"	:	"developer",
    "developers/id:id"		:	"showDeveloper",
    "register"		:	"register",
    ".*"        	: 	"index"
  },
  showStage:function(stageName){
	$('.stage-view.active').hide().removeClass('active');
  	$('#'+stageName+'-view').show().addClass('active');
  	if($(".tbox").length > 0 ) {
  		TINY.box.hide();
  	}
  },
  index: function() {

  	this.showStage('app');
  	$('#app-view').prepend(this.indexView.el);
  	$('#app-view').prepend(this.filterView.el);
  	$('#app-view').prepend(this.highlightsView.el);
  	this.filters.fetch();
  	this.highlights.fetch();
  	this.waterfallApps.fetch();
  	

    
  },
  show: function(id){ 
  	
  	this.showStage('detail');
  	
    var waterfallApp = this.waterfallApps.get(id);
	//todo: change id
	var showModel = new AppFinder.Models.App();
	showModel.url = 'assets/data/app-id2.json';
    var showView = new AppFinder.Views.WaterfallApps.ShowView({model: showModel});
    $("#detail-view").html(showView.el);
    
    showModel.fetch();
     
  },
  popup: function(id, video) {


	  	
	  	var waterfallApp = this.waterfallApps.get(id);
	  	//todo: change id
	 	var popupModel = new AppFinder.Models.App();	  		 
	 	popupModel.url = 'assets/data/app-id2.json';
	 	var showVideo = (video == "&video");
	    var popupView = new AppFinder.Views.WaterfallApps.PopupView({model: popupModel, showVideo: showVideo});
	    
	    popupModel.fetch();

  },
  showDeveloper: function() {
  	this.showStage('detail');
  	
	var showModel = new AppFinder.Models.Developer();
	showModel.url = 'assets/data/developer-id1.json';
    var showView = new AppFinder.Views.Developer.ShowView({model: showModel});
    $("#detail-view").html(showView.el);
    
    showModel.fetch();

	  
  },
  developer: function() {
  	this.showStage('developers');
  	$('#developers-view').prepend(this.developerView.el);
	$('#developers-view').prepend(this.filterView.el);
	this.filters.fetch();
  	this.developers.fetch();
  },
  register:function() {
  	this.showStage('register');	  
  },
  login: function(){
	this.showStage('login');

  }
});