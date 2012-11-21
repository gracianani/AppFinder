#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./views
#= require_tree ./routers

window.AppFinder = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {}
}
jQuery(function($){
	$(".chzn-select").chosen({allow_single_deselect: true});
	
	$('.dropdown-toggle').dropdown();
	
	$('#highlight').click(function(){
		$('#highlight-box').slideToggle('fast');
		$(this).find('#highlight-btn').toggleClass('over');
	}).mouseenter(function(){
		$('#highlight-box').slideDown('fast');
		$(this).find('#highlight-btn').addClass('over');
	});
	
});
