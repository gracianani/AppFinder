AppFinder.Views.Highlights = AppFinder.Views.Highlights || {};

AppFinder.Views.Highlights.HighlightsView = Backbone.View.extend({
  template: JST["backbone/templates/highlights/highlights"],
  events: {
  	"click #highlight-btn" : "showHighlight",
  	"mouseleave #highlight-box" : "leave", 
  	"mouseenter #highlight-box" : "enter",
  	"mouseleave #highlight-btn" :"leave"
  },
  tagName : "div",
  className : "container",
  enter : function() {
  	
	$('#highlight-btn').addClass('over');
  	console.log( "enter" + $('#highlight-btn').hasClass('over'));
  	$('#highlight-box').stop().slideDown('fast');
  },
  showHighlight: function (){
	$('#highlight-btn').toggleClass('over');
  	$('#highlight-box').slideToggle('fast');
  },
  leave : function() {
  	$('#highlight-btn').removeClass('over');
  	setTimeout( function() {
  		if(!$('#highlight-btn').hasClass('over')) {
  			console.log( "leave" + $('#highlight-btn').hasClass('over'));
	  		$('#highlight-box').stop().slideUp('fast');
			$('#highlight-btn').removeClass('over');
		}
  	}, 400);
  	
  },
  render: function(){
  	console.log(this.model.toJSON());
  	$(this.el).html(this.template(this.model.toJSON()));
  	return this;
  }
});