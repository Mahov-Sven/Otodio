Page.pageReady = function(){
	
	Page.addTool("files/res/img/Shuffle.png", "Shuffle Playlist", {
		"click": shufflePlaylist(),
	});
	
	function shufflePlaylist(){
		// TODO shuffle current playlist
	}
}