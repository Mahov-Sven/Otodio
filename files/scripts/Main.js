$(document).ready(function () {
	// ----------------- EVENT HANDLERS GO IN HERE -----------------
	// ------------- SO THEY DON'T TRIGGER BEFORE LOAD -------------

	// ------------- INITIALIZATION -------------
	// ------------- GLOBAL VARS -------------
	
	Globals = {};
	Globals.session = new Session();
	
	Globals.player;
	
	guest();
	
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
	
	$("PAGE_SEARCH").hide();
	$("PAGE_SEARCH_CONTENT").hide();
	
	$("#PAGE_SEARCH_TITLE").click(() => {
		$("#PAGE_TOOLS").toggle();
		$("#PAGE_CONTENT").toggle();
		$("#PAGE_SEARCH_CONTENT").toggle();
		$("#PAGE_SEARCH").toggleClass("Active");
	});
	
	// ------------- END OF JQUERY -------------
	
	// ------------- START PAGE -------------
	$("#TAB_SETTINGS").trigger("click");
});

function switchTab(newTab){
	$("#TAB_VIDEO").removeClass("Active");
	$("#TAB_PLAYLIST").removeClass("Active");
	$("#TAB_SETTINGS").removeClass("Active");
	
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
	$("#TAB_VIDEO").addClass("Active");
	Page.load("video");
}

function switchTab_Playlist(){
	$("#TAB_PLAYLIST").addClass("Active");
	Page.load("playlist");
}

function switchTab_Settings(){
	$("#TAB_SETTINGS").addClass("Active");
	Page.load("settings");
}

function guest(){
	Globals.session.start("guest", "guest");
	return true;
}
