Page.pageReady = function(){
	listPlaylists();
	function listPlaylists(){
		for(let i = 0; i < Globals.session.playlists.length; i++){
			const elem = $("<div>");
			elem.addClass("thumbnail");
			elem.attr("id", Globals.session.playlists[i].id);
			elem.css("background-image", `url("${Globals.session.playlists[i].thumbnail}")`);
			elem.click((event)=>{
				for(let i = 0; i < Globals.session.playlists.length; i++){
					Globals.session.currentPlaylist = Globals.session.playlists[i].id == event.target.id ? Globals.session.playlists[i] : Globals.session.currentPlaylist;
				}
			});
			$("#PLAYLIST_CONTAINER").append(elem);
		}
	}

	Page.addTool("TOOL_MERGE_PLAYLISTS", "Merge Playlists", {
		"click": startMergePlaylists,
	});
	
	function startMergePlaylists(){
		$("#TOOL_MERGE_PLAYLISTS").toggleClass("Active");
		// TODO merge playlists
	}
}