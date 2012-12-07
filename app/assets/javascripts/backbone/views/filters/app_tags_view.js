AppFinder.Views.AppTagsView = AppFinder.Views.AppTagsView || {};

AppFinder.Views.AppTagsView = Backbone.View.extend({
	template: JST["backbone/templates/filters/app_tags"],
    initialize: function(){
	  this.model.on('change',this.render,this);
    },
    tagName : "div",
    id: "filter-tag",
    className : "filter-btn smlDropdown",
    render: function(){
    	var that = this;
    	$(this.el).html(this.template(this.model.toJSON()));
		setTimeout (function(){
    		$("#filter-tags-select").chosen();
    		that.$el.find('.filter-tag-link').bind('click',function(e){
			  	e.preventDefault();
			  	var tagValue = $(e.target).html();
			  	var selector = $('#filter-tags-select');
			  	selector.find('option[value="'+tagValue+'"]').attr('selected','1');
			  	selector.trigger("liszt:updated");
			});
	//		$('.smlDropdown').smlDropdown();
		},0);
    	return this;
    }
});