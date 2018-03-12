Page.pageReady = function(){
	
	// ----------- INITIALIZATION --------------
	
	Page.addTool("TOOL_AUTOPLAY_PLAYLIST", "Autoplay the Next Video", {
		"click": autoplayPlaylist,
	});
	
	Page.addTool("TOOL_REPEAT_PLAYLIST", "Repeat Playlist", {
		"click": repeatPlaylist,
	});
	
	Page.addTool("TOOL_SHUFFLE_PLAYLIST", "Shuffle Playlist", {
		"click": shufflePlaylist,
	});
	
	Page.addToolDivider();
	
	Page.addTool("TOOL_LOCK_PLAYLIST", "Lock Playlist Setting", {
		"click": lockPlaylist,
	});
	
	
	YouTubeAPI.onYouTubeIframeAPIReady();
	const settings = Globals.session.settings;
	
	if(settings.video.autoplay) $("#TOOL_AUTOPLAY_PLAYLIST").addClass("Active");
	if(settings.video.repeat) $("#TOOL_REPEAT_PLAYLIST").addClass("Active");
	if(settings.video.shuffle) $("#TOOL_SHUFFLE_PLAYLIST").addClass("Active");
	if(settings.video.lock) $("#TOOL_LOCK_PLAYLIST").addClass("Active");
	
	// ----------- END INITIALIZATION --------------
	
	//TODO next Video
	//TODO previous video
	
	function autoplayPlaylist(){
		$("#TOOL_AUTOPLAY_PLAYLIST").toggleClass("Active");
		settings.video.autoplay = !settings.video.autoplay;
	}
	
	function repeatPlaylist(){
		$("#TOOL_REPEAT_PLAYLIST").toggleClass("Active");
		settings.video.repeat = !settings.video.repeat;
	}
	
	function shufflePlaylist(){
		$("#TOOL_SHUFFLE_PLAYLIST").toggleClass("Active");
		settings.video.shuffle = !settings.video.shuffle;
		if(settings.video.shuffle){
			Globals.session.currentPlaylist.shuffle();
		}else{
			Globals.session.currentPlaylist.unShuffle();
		}
	}
	
	function lockPlaylist(){
		$("#TOOL_LOCK_PLAYLIST").toggleClass("Active");
		settings.video.lock = !settings.video.lock;
	}
}