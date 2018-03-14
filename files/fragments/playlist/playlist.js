Page.pageReady = function(){
	
	SearchBar.setup(Globals.session.playlists,
			(event, playlist) => {
				Globals.session.currentPlaylist = playlist;
				SearchBar.toggle();
				},
			(playlist) => {return playlist.name}, 
			(playlist) => {return playlist.thumbnail});
	$("#PAGE_SEARCH").show();
	
	$("#MERGE_CONFIRM_CONTAINER").hide();
	
	
	let selected = new Set();
	listPlaylists();
	function listPlaylists(){
		for(let playlist of Globals.session.playlists){
			createPlaylistElement(playlist);
		}
	}

	Page.addTool("TOOL_MERGE_PLAYLISTS", "Merge Playlists", {
		"click": startMergePlaylists,
	});
	
	function createPlaylistElement(playlist){
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

	function startMergePlaylists(){
		$("#TOOL_MERGE_PLAYLISTS").toggleClass("Active");
		$("#PLAYLIST_CONTAINER").toggleClass("MergeStarted");
		$(".playlist").removeClass("Active");
		$("#MERGE_CONFIRM_CONTAINER").toggle();
	}
	
	$("#MERGE_CONFIRM").click(() => {
		startMergePlaylists();
		console.log(selected);
		merge(selected);
		selected.clear();
	});
	
	$("#MERGE_CANCEL").click(() => {
		startMergePlaylists();
		selected.clear();
	});

	function merge(toBeMerged) {
        let merged = [];
        if(toBeMerged.size < 2){
        	return;
        }
        for(let playlist of toBeMerged){
        	merged = merged.concat(playlist.oldVideos);
        }
        console.log(merged);
        YouTubeAPI.importThumbnail(merged[0].id, (thumbnail) => {
        	let playlist = new Playlist("Merged Playlist", merged, thumbnail);
			Globals.session.playlists = playlist;
			createPlaylistElement(playlist);
		});
    }

}