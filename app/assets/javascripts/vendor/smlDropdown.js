(function ($, window) {
  $.fn.smlDropdown = function (options) {

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
        namespaceIdx = namespace + i;
    	$this.bind('click',function(){
	    	$this.toggleClass('over');
	    	console.log('here');
	    	$this.find('.smlDropdown-menu').toggle();
    	});
    });
 };
})(jQuery,this);