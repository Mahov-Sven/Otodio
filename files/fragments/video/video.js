Page.pageReady = function(){
	onYouTubeIframeAPIReady();
	//TODO next Video
	//TODO previous video
	Page.addTool("TOOL_SHUFFLE_PLAYLIST", "Shuffle Playlist", {
		"click": shufflePlaylist,
	});
	
	function shufflePlaylist(){
		let currentPlaylist = new Playlist(Globals.player.getPlaylist());
		currentPlaylist.shuffle();
		Globals.player.loadPlaylist(currentPlaylist.videos);
	}
}