AppFinder.Views.Developer = AppFinder.Views.Developer || {};

AppFinder.Views.Developer.DeveloperView = Backbone.View.extend({
  
  template: JST["backbone/templates/developer/developer"],
  tagName: "div",
  className: "developer",
  
  initialize : function() {},
  render: function() {
  	var that = this;
  	var $el = $(this.el);
    $el.html(this.template(this.model.toJSON() ));
    
    var ratingStr = this.model.get('app_avg_score');
    var ratings = parseFloat(ratingStr);
    if ( ratingStr.indexOf('+') > 0 ) {
	    ratings += 0.5
    }
    $el.find('.dev-appRate .dev-statContent').raty({
		'readOnly':true,
		'space':false,
		'score':ratings	    
    });
    
    $el.find('[rel="tooltip"]').tooltip();

    setTimeout(function(){
	    var containerHeight = $el.height();
	    $el.find('.dev-basicInfo').height(containerHeight - 40);
	    $el.find('.dev-appsContainer').height(containerHeight - 30);
	}, 0);
    return this;
  }
  
});