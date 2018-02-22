$(document).ready(function() {

	// ------------- INITIALIZATION STUFF -------------

	/*Loader.loadHTML("files/html/example", function(html){
		Loader.loadIntoPage("CONTENT", html);
	});*/

	Main_createTab("Home", "files/Home");
	Main_loadTab("files/Home");
	Main_createTab("Adrian", "files/Adrian");
	Main_createTab("Andrew", "files/Andrew");
	Main_createTab("Brett", "files/Brett");
	Main_createTab("Ethan", "files/Ethan");


// ------------- END OF JQUERY STUFF -------------
});

function Main_createTab(title, location) {
	Loader.loadIntoPage("TEST_PAGE_TAB_BANNER", "<div id=\"TEST_PAGE_TAB_" + title + "\" class=\"TestPageTab\" onclick=\"Main_loadTab('" + location + "')\">" + title + "</div>");
}

function Main_loadTab(location) {
	Loader.loadFile(location + "/style.css", function(fileCSS) {
		document.getElementById("TEST_PAGE_TAB_CONTENT").innerHTML = "";
		Loader.loadIntoPage("TEST_PAGE_TAB_CONTENT", "<style>" + fileCSS + "</style>");
		
		Loader.loadFile(location + "/index.html", function(html) {
			Loader.loadIntoPage("TEST_PAGE_TAB_CONTENT", html);
			
			Loader.loadFile(location + "/script.js", function(fileJS) {
				Loader.loadIntoPage("TEST_PAGE_TAB_CONTENT", "<script>" + fileJS + "</script>");
			});
		});
	});
}