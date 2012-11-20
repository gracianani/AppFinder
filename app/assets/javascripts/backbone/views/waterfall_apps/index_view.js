AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.IndexView = Backbone.View.extend ({
  
  template: JST["backbone/templates/waterfall_apps/index"],

  initialize: function ()  {
      this.options.waterfallApps.bind('reset', this.addAll); 
  },

  addAll: function() {
    this.options.waterfallApps.each(this.addOne); 
  },
  addOne: function(waterfallApps) {
    view = new AppFinder.Views.WaterfallApps.WaterfallAppsView({model : waterfallApps});
    
    $('#waterfallApps').append(view.render().el);
  
	
    
  },
  render: function() {
    $(this.el).html(this.template( {waterfallApps: this.options.waterfallApps.toJSON() }) ); 
    
    this.addAll();
    $('#waterfallApps').masonry({
		// options
		itemSelector : '.card'
	})
	
	$('#waterfallApps').infinitescroll({
    	navSelector  : "#page-nav", // selector for the paged navigation (it will be hidden)
    	nextSelector : "#page-nav a", // selector for the NEXT link (to page 2)
    	itemSelector : ".card",  // selector for all items you'll retrieve
    	loading : {
    		finishedMsg: "no more pages to load",
    		/*img: 'http://i.imgur.com/6RMhx.gif',*/
    		msg: null,
        	msgText: "<em>Loading the next set of posts...</em>",
    	} 
    	
    	},
    	function( newElements ) {
    	$('#waterfallApps').infinitescroll({state : {currPage: 1}});
        // hide new items while they are loading
        var $newElems = $( newElements ).css({ opacity: 0 });
        // ensure that images load before adding to masonry layout
        $newElems.imagesLoaded(function(){
          // show elems now they're ready
          $newElems.animate({ opacity: 1 });
          $('#waterfallApps').masonry( 'appended', $newElems, true ); 
        });
      });
    return this;
  }
  
});
  