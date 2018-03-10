Page.pageReady = function() {
	const settingsLocation = "files/fragments/settings/";
	if (Globals.session.started) {
		console.log("Settings: started");
		Loader.loadFragment("SETTINGS_CONTENT", 
				`${settingsLocation}fragments/connect/connect.html`,
				`${settingsLocation}fragments/connect/connect.css`,
				`${settingsLocation}fragments/connect/connect.js`,
				() => {
					
				});
		
	} else {
		console.log("Settings: not started");
		Loader.loadFragment("SETTINGS_CONTENT", 
				`${settingsLocation}fragments/log/log.html`,
				`${settingsLocation}fragments/log/log.css`,
				`${settingsLocation}fragments/log/log.js`,
				() => {
					if (typeof settings_fragmentReady === "function") settings_fragmentReady();
				});
	}
}