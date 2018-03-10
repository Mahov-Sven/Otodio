Page.pageReady = function(){
	onYouTubeIframeAPIReady();
	//TODO next Video
	//TODO previous video
	Page.addTool("TOOL_SHUFFLE_PLAYLIST", "Shuffle Playlist", {
		"click": shufflePlaylist(),
	});
	
	function shufflePlaylist(){
		// TODO shuffle current playlist
	}
}