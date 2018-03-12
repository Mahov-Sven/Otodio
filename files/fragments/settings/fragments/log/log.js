settings_fragmentReady = function(){
	$("#SETTINGS_LOGIN").click(()=>{
		$("#LOGIN").trigger("click");
	});
	
	$("#SETTINGS_REGISTER").click(()=>{
		$("#REGISTER").trigger("click");
	});
	
	$("#SETTINGS_LOGIN_GUEST").click(()=>{
		$("#LOGIN_GUEST").trigger("click");
		// TODO temporary login fix
		Globals.session.start("guest", "guest");
		Page.reload();
	});
}