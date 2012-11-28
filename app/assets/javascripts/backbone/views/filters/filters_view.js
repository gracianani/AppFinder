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

		$("#filter-tags-select,#filter-country-select,#filter-category-select").chosen();
		$('.smlDropdown').smlDropdown();
		
		$('#filter-rating-low').raty({
			'half':true,
			'score':1,
			'targetKeep':true,
			'target':'#filter-rating-low-hint'
		});
		$('#filter-rating-high').raty({
			'half':true,
			'score':5,
			'targetKeep':true,
			'target':'#filter-rating-high-hint'
		});
		
		var sliderRange = $('#filter-priceRange-slider');
		var sliderText = $('#filter-priceRange');
		sliderRange.slider({
            range: true,
            min: 0,
            max: 50,
            values: [ 0, 50 ],
            slide: function( event, ui ) {
            	var lowest = ui.values[ 0 ],
            	highest = ui.values[1];
            	
            	if ( lowest == 0 ) {
	            	lowest = "Free";
            	} else {
	            	lowest = '$' + lowest;
            	}
            	if ( highest == 50 ) {
	            	highest = "$" + highest + '+';
	            	
            	} else {
	            	highest = '$' + highest;
            	}
                sliderText.text( lowest + " - " + highest );
            }
        });
        
        var ratingsCountRange = $('#filter-ratingsCountRange-slider');
		var ratingsCountText = $('#filter-ratingsCountRange');
		ratingsCountRange.slider({
            range: true,
            min: 0,
            max: 5000,
            values: [ 0, 5000 ],
            slide: function( event, ui ) {
            	var lowest = ui.values[ 0 ],
            	    highest = ui.values[1];
            	
            	if ( lowest == 0 ) {
	            	lowest = "0";
            	} else {
	            	lowest =  lowest;
            	}
            	if ( highest == 5000 ) {
	            	highest = highest + '+';
	            	
            	} else {
	            	highest = highest;
            	}
                ratingsCountText.text( lowest + " - " + highest );
            }
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