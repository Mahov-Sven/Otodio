Page.pageReady = function(){
	onYouTubeIframeAPIReady();
	Page.addTool("TOOL_SHUFFLE_PLAYLIST", "Shuffle Playlist", {
		"click": shufflePlaylist(),
	});
	
	function shufflePlaylist(){
		// TODO shuffle current playlist
	}
}