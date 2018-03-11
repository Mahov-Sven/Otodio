Page.pageReady = function(){
	onYouTubeIframeAPIReady();
	let shuffleToggled = false;
	let oldPlaylist = Globals.session.currentPlaylist;
	//TODO next Video
	//TODO previous video
	Page.addTool("TOOL_SHUFFLE_PLAYLIST", "Shuffle Playlist", {
		"click": shufflePlaylist,
	});
	
	function shufflePlaylist(){
		if(shuffleToggled){
			shuffleToggled = true;
			//TODO Unshuffle selected playlist
		}else{
			shuffleToggled = false;
			Globals.session.currentPlaylist.shuffle();
		}
	}
}