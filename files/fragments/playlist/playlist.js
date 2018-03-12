Page.pageReady = function(){
	listPlaylists();
	function listPlaylists(){
		for(let i = 0; i < Globals.session.playlists.length; i++){
			const elem = $("<div>");
			elem.addClass("playlist");
			elem.attr("id", Globals.session.playlists[i].id);
			elem.css("background-image", `url("${Globals.session.playlists[i].thumbnail}")`);
			elem.click((event)=>{
				for(let i = 0; i < Globals.session.playlists.length; i++){
					if($("#TOOL_MERGE_PLAYLISTS").hasClass("Active")){
						console.log("aaaaaaaaaaaaaa");
						$(event.target).toggleClass("Active");
					}else{
						Globals.session.currentPlaylist = Globals.session.playlists[i].id == event.target.id ? Globals.session.playlists[i] : Globals.session.currentPlaylist;
					}
				}
			});
			//if(Globals.session.playlists[i].id == Globals.session.currentPlaylist.id){
				//elem.toggleClass("CurrentPlaylist");
			//}
			$("#PLAYLIST_CONTAINER").append(elem);

		}
	}

	Page.addTool("TOOL_MERGE_PLAYLISTS", "Merge Playlists", {
		"click": startMergePlaylists,
	});
	
	function startMergePlaylists(){
		$("#TOOL_MERGE_PLAYLISTS").toggleClass("Active");
		$("#PLAYLIST_CONTAINER").toggleClass("MergeStarted");
		$(".playlist").removeClass("Active");
	}
}