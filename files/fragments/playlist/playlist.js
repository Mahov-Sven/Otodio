Page.pageReady = function(){
	listPlaylists();
	function listPlaylists(){
		//TODO load playlist icons and list them
		for(let i = 0; i < Globals.session.playlists.length; i++){
			YouTubeAPI.importThumbnail(Globals.session.playlists[i].videos[0], (thumbnail) => {
				$('#PLAYLIST_CONTAINER').append(`<img src='${thumbnail}'></img>`);
			});
		}
		//TODO play selected playlist
	}

	Page.addTool("TOOL_MERGE_PLAYLISTS", "Merge Playlists", {
		"click": startMergePlaylists,
	});
	
	function startMergePlaylists(){
		$("#TOOL_MERGE_PLAYLISTS").toggleClass("Active");
		// TODO merge playlists
	}
}