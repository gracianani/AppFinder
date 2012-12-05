AppFinder.Views.Developer = AppFinder.Views.Developer || {};

AppFinder.Views.Developer.ShowView = Backbone.View.extend ({
  
  template: JST["backbone/templates/developer/show"],
  tagName : "div",
  className : "devDetail detailPage container",
  initialize: function ()  {
  	 this.model.on('change',this.render,this);

  },
  events : {
	  'click .smlDev':'clickSimilarDev'
  },
  clickSimilarDev: function(e){
	  var href = $(e.currentTarget).attr('data-href');
	  window.router.navigate(href);
	 
  },
  render: function() {
  	$(this.el).html(this.template(this.model.toJSON()));
  	$el = $(this.el);
  	
  	var ratingStr = this.model.get('app_avg_score');
    var ratings = parseFloat(ratingStr);
    if ( ratingStr.indexOf('+') > 0 ) {
	    ratings += 0.5
    }
    $el.find('.raty').raty({
		'readOnly':true,
		'space':false,
		'score':ratings	    
    });
    
    $el.find('.app-raty,.smlDev-raty').each(function(){
    	ratingStr = $(this).attr('data-rating');
    	ratings = parseFloat(ratingStr);
    	if ( ratingStr.indexOf('+') > 0 ) {
	    	ratings += 0.5
	    }
	    $(this).raty({
			'readOnly':true,
			'space':false,
			'score':ratings			    
	    });
    	
    });
   return this;

  }
  
});