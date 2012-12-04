AppFinder.Views.Developer = AppFinder.Views.Developer || {};

AppFinder.Views.Developer.ShowView = Backbone.View.extend ({
  
  template: JST["backbone/templates/developer/show"],
  tagName : "div",
  className : "devDetail detailPage container",
  initialize: function ()  {
  	 this.model.on('change',this.render,this);

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
   return this;

  }
  
});