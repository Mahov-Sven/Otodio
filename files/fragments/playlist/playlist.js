Page.pageReady = function(){
	let selected = new Set();
	listPlaylists();
	function listPlaylists(){
		for(let playlist of Globals.session.playlists){
			const elem = $("<div>");
			elem.addClass("playlist");
			elem.css("background-image", `url("${playlist.thumbnail}")`);
			elem.click((event)=>{
				if($("#TOOL_MERGE_PLAYLISTS").hasClass("Active")){
					$(event.target).toggleClass("Active");
					if(selected.has(playlist)) {
            			selected.remove(playlist);
        			} else {
            			selected.add(playlist);
        			}   
				}else{
					Globals.session.currentPlaylist = playlist;
				}
			});
			$("#PLAYLIST_CONTAINER").append(elem);

		}
	}

	Page.addTool("TOOL_MERGE_PLAYLISTS", "Merge Playlists", {
		"click": startMergePlaylists,
	});
	
	$(".playlist")
	
	function startMergePlaylists(){
		$("#TOOL_MERGE_PLAYLISTS").toggleClass("Active");
		$("#PLAYLIST_CONTAINER").toggleClass("MergeStarted");
		if(!$("#TOOL_MERGE_PLAYLISTS.Active").length){
			console.log(selected);
			Globals.session.playlists.add();
			selected.clear();
		}
		$(".playlist").removeClass("Active");
		
	}
}