Page.pageReady = function(){
	YouTubeAPI.onYouTubeIframeAPIReady();
	//TODO next Video
	//TODO previous video
	Page.addTool("TOOL_SHUFFLE_PLAYLIST", "Shuffle Playlist", {
		"click": shufflePlaylist,
	});
	
	function shufflePlaylist(){
		if(Globals.session.settings.video.shuffle){
			Globals.session.settings.video.shuffle = false;
			Globals.session.currentPlaylist.unShuffle();
		}else{
			Globals.session.settings.video.shuffle = true;
			Globals.session.currentPlaylist.shuffle();
		}
	}
}