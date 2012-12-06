;(function($) {

	var methods = {
		init: function(settings) {
			return this.each(function() {
				var self	= this,
					$this	= $(self).empty();
	
				self.opt = $.extend(true, {}, $.fn.smlScorebar.defaults, settings);

				$this.data('settings', self.opt);
				
				$(self).addClass("smlScorebar");

				if (typeof self.opt.score == 'function') {
					self.opt.score = self.opt.score.call(self);
				}
				if (!self.opt.score ) {
					self.opt.score = parseInt($(self).attr('data-score'));
				}
				if (!self.opt.width ) {
					self.opt.width = parseInt($(self).attr('data-width'));
				}
				console.log(typeof(self.opt.score));


				for (var i = 1; i <= self.opt.number; i++) {
				
					var cell = $('<div></div>', {
						class	: "smlScoreCell " + ((!self.opt.score || self.opt.score < i) ? self.opt.scoreOff : self.opt.scoreOn),	
					});
					if ( self.opt.width && self.opt.width > 0) {
						cell.css('width', self.opt.width + 'px');
					}
					if ( self.opt.space && self.opt.space > 0) {
						cell.css('margin-right', self.opt.space + 'px');
					}
					cell.appendTo(self);
				}
				
				if (!self.opt.average ) {
					self.opt.average = $(self).attr('data-average');
				}
				
				if ( self.opt.average ) {
				    var leftPos = parseFloat(self.opt.average) * (self.opt.width + self.opt.space);
					$('<div class="smlScoreAvgDivider"></div>').css('left',leftPos +'px').appendTo(self);
					$('<div class="smlScoreAvg">Avg</div>').css('left',(leftPos-10) +'px').appendTo(self);
				}
				if (!self.opt.top ) {
					self.opt.top = $(self).attr('data-top');
				}
				
				if ( self.opt.top && parseInt(self.opt.top) < self.opt.topStandard) {
					$('<div class="smlScoreTop">Top <span class="smlScoreTop-num">'+ self.opt.top + '</span> <small>%</small></div>').appendTo(self);
				}
				
				

			});
		}, error: function(message) {
			$(this).html(message);

			$.error(message);
		}
	};

	$.fn.smlScorebar = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
			console.log('here');
		} else {
			$.error('Method ' + method + ' does not exist!');
		} 
	};

	$.fn.smlScorebar.defaults = {
		path			: 'assets/img/',
		score			: undefined,
		number			: 10,
		scoreOff		: 'smlScoreOff',
		scoreOn			: 'smlScoreOn',
		width			: 10,
		space			: 1,
		average			: undefined,
		showTop			: true,
		top				: undefined,
		topStandard		: 31
	};

})(jQuery);
