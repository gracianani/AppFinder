AppFinder.Views.Developer = AppFinder.Views.Developer || {};

AppFinder.Views.Developer.ShowView = Backbone.View.extend ({
  
  template: JST["backbone/templates/developer/show"],
  tagName : "div",
  className : "devDetail detailPage container",
  initialize: function ()  {
  	 this.model.on('change',this.render,this);
  	 $(window).on('resize', this.repositionBoards)

  },
  remove: function() {
    $(window).off('resize', this.repositionBoards);
   },
  events : {
	  'click .smlDev':'clickSimilarDev'
  },
  clickSimilarDev: function(e){
	  var href = $(e.currentTarget).attr('data-href');
	  window.router.navigate(href);
	 
  },
  repositionBoards: function(e) {
	  var wndWidth = $(e.currentTarget).width();
	  if ( wndWidth < 1024 ) {

	  }
	  
  },
  render: function() {
  	$(this.el).html(this.template(this.model.toJSON()));
  	$el = $(this.el);
  	
  	

  	$el.find('.devDetail-app').each(function(){
    	$(this).smlPopover({
	    "trigger":"hover"
		});
			
    });
    
  	
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
    $el.find('[rel="tooltip"]').tooltip();
    
    var priceData = this.model.get('price_data');
    var deviceData = this.model.get('device_data');

    AmCharts.ready(function () {
                // PIE CHART
                chart = new AmCharts.AmPieChart();
                chart.dataProvider = priceData;
                chart.titleField = "title";
                chart.valueField = "num";
                chart.outlineColor = "#FFFFFF";
                chart.outlineAlpha = 0.8;
                chart.outlineThickness = 2;
                chart.labelRadius = 0;
                chart.labelText="[[title]]<br>[[percents]]%",
                chart.marginBottom = 0;
                chart.marginTop=0;

                // WRITE
                chart.write("freeChart");
                
                chart2 = new AmCharts.AmPieChart();
                chart2.dataProvider = deviceData;
                chart2.titleField = "title";
                chart2.valueField = "num";
                chart2.outlineColor = "#FFFFFF";
                chart2.outlineAlpha = 0.8;
                chart2.outlineThickness = 2;
                chart2.labelRadius = 0;
                chart2.labelText="[[title]]<br>[[percents]]%",
                chart2.marginBottom = 0;
                chart2.marginTop=0;
                chart2.write("deviceChart");
   });
   return this;

  }
  
});