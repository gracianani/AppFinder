AppFinder.Views.AppTagsView = AppFinder.Views.AppTagsView || {};

AppFinder.Views.AppTagsView = Backbone.View.extend({
	template: JST["backbone/templates/filters/app_tags"],
    initialize: function(){
	  this.model.on('change',this.render,this);
    },
    tagName : "div",
    id: "filter-tag",
    title:"Tags",
    className : "filter-btn smlDropdown",
    render: function(){
    	$el = $(this.el);
    	$el.html(this.template(this.model.toJSON()));
		setTimeout (function(){
    		$("#filter-tags-select").chosen();
    		$el.find('.filter-tag-link').bind('click',function(e){
			  	e.preventDefault();
			  	var tagValue = $(e.target).html();
			  	var selector = $('#filter-tags-select');
			  	selector.find('option[value="'+tagValue+'"]').attr('selected','1');
			  	selector.trigger("liszt:updated");
			});	
		},0);
		$el.smlDropdown();
		$el.attr("title", this.title).tooltip();
		
    	return this;
    }
});