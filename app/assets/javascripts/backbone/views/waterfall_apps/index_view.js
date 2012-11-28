AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.IndexView = Backbone.View.extend ({
  
  template: JST["backbone/templates/waterfall_apps/index"],
  tagName : "div",
  id: "waterfallApps",
  initialize: function ()  {
      this.options.waterfallApps.bind('reset', this.addAll); 
  },

  addAll: function() {
    this.options.waterfallApps.each(this.addOne); 
  },
  addOne: function(waterfallApps) {
    view = new AppFinder.Views.WaterfallApps.WaterfallAppsView({model : waterfallApps});
    
    $('#waterfallApps').append(view.render().el);
 	return view;
    
  },
  
  
  render: function() {
  	
    $('#waterfallApps').html(this.template( ) );
    this.addAll(); 
    var that=this;
    $('#waterfallApps').masonry({
		// options
		itemSelector : '.card'
	});
	$('#waterfallApps').infinitescroll({
    	navSelector  : "#page-nav", // selector for the paged navigation (it will be hidden)
    	nextSelector : "#page-nav a", // selector for the NEXT link (to page 2)
    	itemSelector : "div",  // selector for all items you'll retrieve
        dataType: 'json',
        debug: false,
        appendCallback: false,
    	loading : {
    		finishedMsg: "no more pages to load",
    		img: 'http://i.imgur.com/6RMhx.gif',
        	msgText: "<em>Loading the next set of posts...</em>"
    		} 
    	},

    	function( newElements, page ) {
	    	
	    	$.each(newElements.apps, function(index, item) {
	    		item.id=item.id+page.state.currPage*20;
	    		var view = that.addOne(new AppFinder.Models.App(item));
	    		$('#waterfallApps').masonry('appended',$(view.el), true);
	    	});
      	});
   return this;

  }
  
});
  