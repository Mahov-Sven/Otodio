Page.pageReady = function() {
	const settingsLocation = "files/fragments/settings/";
	if (Globals.session.started) {
		console.log("Settings: started");
		Loader.loadFile(`${settingsLocation}fragments/connect.html`, (html) => {
			Loader.loadIntoPage("SETTINGS_CONTENT", html);
		});
	} else {
		console.log("Settings: not started");
		Loader.loadFile(`${settingsLocation}fragments/log.html`, (html) => {
			Loader.loadIntoPage("SETTINGS_CONTENT", html);
		});
	}
}