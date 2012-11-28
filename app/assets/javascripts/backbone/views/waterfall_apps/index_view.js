AppFinder.Views.WaterfallApps = AppFinder.Views.WaterfallApps || {};

AppFinder.Views.WaterfallApps.IndexView = Backbone.View.extend ({
  
  template: JST["backbone/templates/waterfall_apps/index"],
  tagName : "div",
  className : "container",
  initialize: function ()  {
      $(this.el).html(this.template());

      this.collection.on('add', this.addOne, this);
      this.collection.on('reset', this.addAll, this);
      
      this.apps = $(this.el).find('#waterfallApps');
      console.log(this.apps);
  },

  addAll: function() {
    this.collection.forEach(this.addOne,this); 
    this.render();
  },
  addOne: function(waterfallApps) {
    view = new AppFinder.Views.WaterfallApps.WaterfallAppsView({model : waterfallApps});
    this.apps.append(view.render().el);
 	return view;
    
  },
  
  
  render: function() {
  	
    var that=this; 
    this.apps.masonry({
		// options
		itemSelector : '.card'
	});

	this.apps.infinitescroll({
    	navSelector  : "#page-nav", // selector for the paged navigation (it will be hidden)
    	nextSelector : "#page-nav a", // selector for the NEXT link (to page 2)
    	itemSelector : "div",  // selector for all items you'll retrieve
        dataType: 'json',
        debug: true,
        appendCallback: false,
    	loading : {
    		finishedMsg: "no more pages to load",
    		img: 'http://i.imgur.com/6RMhx.gif',
        	msgText: "<em>Loading the next set of posts...</em>"
    		} 
    	},

    	function( newElements, page ) {
	    	$(newElements).each(function(index, item) {
	    		
	    		item.id=item.id+page.state.currPage*20;
	    		var view = that.addOne(new AppFinder.Models.App(item));

	    		$('#waterfallApps').masonry('appended',$(view.el), true);
	    	});

      	});
   return this;

  }
  
});
  