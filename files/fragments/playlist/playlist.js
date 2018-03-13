Page.pageReady = function(){
	listPlaylists();
	function listPlaylists(){
		for(let playlist of Globals.session.playlists){
			const elem = $("<div>");
			elem.addClass("playlist");
			elem.attr("id", playlist[0]);
			elem.css("background-image", `url("${playlist[1].thumbnail}")`);
			$("#PLAYLIST_CONTAINER").append(elem);

		}
	}

	Page.addTool("TOOL_MERGE_PLAYLISTS", "Merge Playlists", {
		"click": startMergePlaylists,
	});
	
	$(".playlist").click((event)=>{
		if($("#TOOL_MERGE_PLAYLISTS").hasClass("Active")){
			$(event.target).toggleClass("Active");
		}else{
			Globals.session.currentPlaylist = Globals.session.playlists.get(event.target.id);
		}
	});
	
	function startMergePlaylists(){
		$("#TOOL_MERGE_PLAYLISTS").toggleClass("Active");
		$("#PLAYLIST_CONTAINER").toggleClass("MergeStarted");
		$(".playlist").removeClass("Active");
	}
}