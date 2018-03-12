Page.pageReady = function(){
	listPlaylists();
	function listPlaylists(){
		//TODO load playlist icons and list them
		for(playlists in session.playlists){
			console.log(playlists);
		}
		//TODO play selected playlist
	}

	Page.addTool("TOOL_MERGE_PLAYLISTS", "Merge Playlists", {
		"click": startMergePlaylists,
	});
	
	function startMergePlaylists(){
		// TODO merge playlists
	}
}