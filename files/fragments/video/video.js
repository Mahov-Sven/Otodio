Page.pageReady = function(){
	YouTubeAPI.onYouTubeIframeAPIReady();
	let shuffleToggled = false;
	//TODO next Video
	//TODO previous video
	Page.addTool("TOOL_SHUFFLE_PLAYLIST", "Shuffle Playlist", {
		"click": shufflePlaylist,
	});
	
	function shufflePlaylist(){
		if(shuffleToggled){
			shuffleToggled = false;
			Globals.session.currentPlaylist.unShuffle();
		}else{
			shuffleToggled = true;
			Globals.session.currentPlaylist.shuffle();
		}
	}
}