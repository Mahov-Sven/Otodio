settings_fragmentReady = function(){
	$(".SettingTitle").click((event) => {
		$(event.target).parent().toggleClass("SettingActive");
	})
}