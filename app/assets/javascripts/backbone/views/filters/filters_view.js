AppFinder.Views.Filters = AppFinder.Views.Filters || {};

AppFinder.Views.Filters.FiltersView = Backbone.View.extend({
  template: JST["backbone/templates/filters/search"],
  initialize: function(){
	  this.model.on('change',this.render,this);
  },
  events: {
	  "click .filter-tag-link" : 'clickTagLink'
  },
  tagName : "div",
  className : "container",
  id: "filter",
  clickTagLink:function(e){

  	
  },
  render: function(){
  	$(this.el).html(this.template(this.model.toJSON()));
  	var that = this;
	setTimeout( function (){

		$("#filter-tags-select,#filter-badges-select,#filter-country-select,#filter-category-select").chosen();
		$('.smlDropdown').smlDropdown();
		
		$('#filter-rating-low').raty({
			'half':true,
			'score':1,
			'targetKeep':true,
			'target':'#filter-rating-low-hint',
			'targetType' : 'number'
		});
		$('#filter-rating-high').raty({
			'half':true,
			'score':5,
			'targetKeep':true,
			'target':'#filter-rating-high-hint',
			'targetType' : 'number'
		});
        
       
		that.$el.find("#filter-price .tag").bind('click', function(e) {
			$(this).toggleClass("active");
		});
		
		that.$el.find('.filter-tag-link').bind('click',function(e){
		  	e.preventDefault();
		  	var tagValue = $(e.target).html();
		  	var selector = $('#filter-tags-select');
		  	selector.find('option[value="'+tagValue+'"]').attr('selected','1');
		  	selector.trigger("liszt:updated");
		});
	}, 0);
	 return this;
	}
  	
});