Page.pageReady = function(){
	onYouTubeIframeAPIReady();
	//TODO next Video
	//TODO previous video
	Page.addTool("TOOL_SHUFFLE_PLAYLIST", "Shuffle Playlist", {
		"click": shufflePlaylist(),
	});
	
	function shufflePlaylist(){
		//let currentPlaylist = new Playlist($('#videoPlayer').getPlaylist());
		//currentPlaylist.shuffle();
		//$('#videoPlayer').loadPlaylist(currentPlaylist.videos);
	}
}