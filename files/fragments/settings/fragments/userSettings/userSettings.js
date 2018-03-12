settings_fragmentReady = function(){
	// ----------- INITIALIZATION --------------
	
	const settings = Globals.session.settings;
	
	if(settings.video.autoplay) $("#SETTING_VIDEO_AUTOPLAY").addClass("Active");
	if(settings.video.repeat) $("#SETTING_VIDEO_REPEAT").addClass("Active");
	if(settings.video.shuffle) $("#SETTING_VIDEO_SHUFFLE").addClass("Active");
	if(settings.video.lock) $("#SETTING_VIDEO_LOCK").addClass("Active");
	
	// ----------- END INITIALIZATION --------------
	
	$(".SettingTitle").click((event) => {
		$(event.target).parent().toggleClass("SettingActive");
	});
	
	$(".SettingValueToggleButton").click((event) => {
		$(event.target).parent().toggleClass("Active");
	});
	
	$("#SETTING_IMPORT_YOUTUBE").click((event) => {
		// TODO
	});
	
	$("#SETTING_IMPORT_YOUTUBE_URL .SettingValueButton").click((event) => {
		YouTubeAPI.importPlaylist($('.SettingValueTextBox').text());
	});
	
	$("#SETTING_VIDEO_AUTOPLAY").click((event) => {
		settings.video.autoplay = !settings.video.autoplay;
	});
	
	$("#SETTING_VIDEO_REPEAT").click((event) => {
		settings.video.repeat = !settings.video.repeat;
	});
	
	$("#SETTING_VIDEO_SHUFFLE").click((event) => {
		settings.video.shuffle = !settings.video.shuffle;
	});
	
	$("#SETTING_VIDEO_LOCK").click((event) => {
		settings.video.lock = !settings.video.lock;
	});
}