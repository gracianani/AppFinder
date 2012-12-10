
(function ($, window) {
	
  $.fn.smlDropdown = function (options) {
	var i = i || 0;
    // Default settings
    var settings = $.extend({
      "auto": true,             // Boolean: Animate automatically, true or false
      "namespace": "smldropdown",   // String: change the default namespace used

    }, options);

    return this.each(function () {
      // Index for namespacing
      i++;
      var $this = $(this),
      // Namespacing
        namespace = settings.namespace,
        namespaceIdx = namespace + i,
        $menu,
        hideOtherMenu = function(){
	        $('.smlDropdown.open').not($this).removeClass('open').find('.smlDropdown-menu').hide();
        };
        
        $menu = $this.find('.smlDropdown-menu');
        $menu.bind('click',function(e){
        	if ( $menu[0] == e.currentTarget ) {
	        	e.stopPropagation();
        	}	
        });
    	$this.bind('click',function(e){
    		e.stopPropagation();
    		hideOtherMenu();
	    	$this.toggleClass('open');
	    	$menu.toggle();	    		
    	});

    	$(window).bind('click',function(e){
    		
	    		$this.removeClass('open');
	    		$menu.hide();
    		
    	});
    });
 };
})(jQuery,this);