$(document).ready(function() {

	Loader.loadFile("files/fragments.txt", function(file) {
		const lines = file.split('\n');
		let tabLoaded = false;
		for (const line of lines) {
			const title = line.trim();
			if (title.includes("//")) continue;
			Main_createTab(title);
			if (!tabLoaded) Main_loadTab(title);
			tabLoaded = true; }
	});

});

function Main_createTab(title) {
	Loader.loadIntoPage("TEST_PAGE_TAB_BANNER", "<div id=\"TEST_PAGE_TAB_" + title + "\" class=\"TestPageTab\" onclick=\"Main_loadTab('" + title + "')\">" + title + "</div>");
}

function Main_loadTab(title) {
	title = "files/" + title;
	Loader.loadFile(title + "/style.css", function(fileCSS) {
		document.getElementById("TEST_PAGE_TAB_CONTENT").innerHTML = "";
		Loader.loadIntoPage("TEST_PAGE_TAB_CONTENT", "<style>" + fileCSS + "</style>");

		Loader.loadFile(title + "/index.html", function(html) {
			Loader.loadIntoPage("TEST_PAGE_TAB_CONTENT", html);

			Loader.loadJavaScriptIntoPage("TEST_PAGE_TAB_CONTENT", title + "/script.js", function(){
				if(typeof fragmentReady === "function") fragmentReady();
			});
		});
	});
}