AppFinder.Models.Player = Backbone.Model.extend({
	initialize: function() {
		var playerId = this.get('player_id');
		var videoId = this.get('video_id');
		var videoType = this.get('video_type');
		var width = this.get('width');
		var height = this.get('height');
		if(videoType=="youtube" && typeof(YT.Player) != 'undefined') {
    		this.player  = new YT.Player(playerId, {
	      		height: height,
	      		width: width,
	      	    videoId: videoId
    		});
		}
		else if(videoType=="vimeo") {
			// render iframe
			var holder =$(document.getElementById(playerId));
			var player = '<iframe id="' + playerId+ 
			'" src="http://player.vimeo.com/video/'+ videoId +
			'?api=1&amp;player_id='+ playerId + 
			'" width="' + width + '" height="' + height + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
			
			holder.after(player);
			holder.remove();
			this.player = $f(document.getElementById(playerId));
			this.player.addEvent('ready', function() {
					
			});
			
		}	
	},
	pause : function () {
		var playerId = this.get('player_id');
		var videoId = this.get('video_id');
		var videoType = this.get('video_type');
		
		if(videoType == "vimeo") {
			this.player.api('pause');
		}
		else if(videoType == "youtube") {
			if(typeof(this.player.stopVideo) != 'undefined') 
			    this.player.stopVideo();
		}
	}
	
});