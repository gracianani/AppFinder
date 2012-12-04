AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

LoadingStates = [".", "..", "..."];
Tick = 1;
LoadingInterval = 0;

AppFinder.Views.LoadingView = Backbone.View.extend({
	template: JST["backbone/templates/loading"],
  	tagName : "div",
  	id: "loadingOutter",
  	initialize : function() {
  		$("#loadingContainer").html(this.render().el);
  	},
  	render: function() {
  		$(this.el).html(this.template( ));
  		 LoadingInterval = setInterval( function() {
  		 	if($('#loading').length==0) {
  		 		window.clearInterval(LoadingInterval);
  		 
  		 	}
  		 	$('#loading .loading-msg').html("Loading" + LoadingStates[Tick%3] );
  		 	Tick=Tick+1;
  		 }, 500);
    	return this;
  	}
});