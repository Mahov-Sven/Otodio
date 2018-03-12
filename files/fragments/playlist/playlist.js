Page.pageReady = function(){
	listPlaylists();
	function listPlaylists(){
		//TODO load playlist icons and list them
		for(let i = 0; i < Globals.session.playlists.length; i++){
			const elem = $("<div>");
			elem.addClass("thumbnail");
			elem.css("background-image", `url("${Globals.session.playlists[i].thumbnail}")`);
			//$('#PLAYLIST_CONTAINER').append(`<img class='thumbnail' src='${Globals.session.playlists[i].thumbnail}'></img>`);
			$("#PLAYLIST_CONTAINER").append(elem);
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