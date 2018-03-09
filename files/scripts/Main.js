$(document).ready(function () {
	// ----------------- EVENT HANDLERS GO IN HERE -----------------
	// ------------- SO THEY DON'T TRIGGER BEFORE LOAD -------------

	// ------------- INITIALIZATION STUFF -------------
	
	// ------------- GLOBAL VARS -------------
	
	Globals = {};
	Globals.session = new Session();
	
	// ------------- START OF JQUERY -------------

	$("#TAB_VIDEO").click(() => {
		switchTab("video");
	});
	
	$("#TAB_PLAYLIST").click(() => {
		switchTab("playlist");
	});
	
	$("#TAB_SETTINGS").click(() => {
		switchTab("settings");
	});
	
	// ------------- END OF JQUERY -------------
});

function switchTab(newTab){
	$("#TAB_VIDEO").removeClass("OptionActive");
	$("#TAB_PLAYLIST").removeClass("OptionActive");
	$("#TAB_SETTINGS").removeClass("OptionActive");
	
	switch(newTab){
	case "video":
		switchTab_Video();
		break;
	case "playlist":
		switchTab_Playlist();
		break;
	case "settings":
		switchTab_Settings();
		break;
	default:
		console.err(`Unknown tab: ${newTab}`);
	}
}

function switchTab_Video(){
	$("#TAB_VIDEO").addClass("OptionActive");
	Page.load("video");
}

function switchTab_Playlist(){
	$("#TAB_PLAYLIST").addClass("OptionActive");
	Page.load("playlist");
}

function switchTab_Settings(){
	$("#TAB_SETTINGS").addClass("OptionActive");
	Page.load("settings");
}
