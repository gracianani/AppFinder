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
});
