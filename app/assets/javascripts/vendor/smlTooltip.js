!function ($) {

  "use strict"; // jshint ;_;
  var _super = $.fn.popover;

 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var SmlPopover = function (element, options) {
    this.init('smlPopover', element, options);
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  SmlPopover.prototype = $.extend({}, $.fn.popover.Constructor.prototype, {

    constructor: SmlPopover,
    _super: function() {
        var args = $.makeArray(arguments);
        _super.Constructor.prototype[args.shift()].apply(this, args);
    },
   show: function() {
   		
		this._super('show');
  		setTimeout( function() {  $(".flexslider")
		    .flexslider({
		      animation: "slide",
		      useCSS: false,
		      animationLoop: true,
		      smoothHeight: true,
		      animationSpeed: 200,
		      controlNav:false,
		      directionNav:false
		  }); }, 100);
		  
  	}

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  $.fn.smlPopover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('smlPopover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('smlPopover', (data = new SmlPopover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.smlPopover.Constructor = SmlPopover

  $.fn.smlPopover.defaults = $.extend({} , $.fn.popover.defaults, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover smlPopover"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>'
  })

}(window.jQuery);