Page.pageReady = function() {
	const settingsLocation = "files/fragments/settings/";
	if (Globals.session.started) {
		console.log("Settings: started");
		Loader.loadFragment("SETTINGS_CONTENT", 
				`${settingsLocation}fragments/userSettings/userSettings.html`,
				`${settingsLocation}fragments/userSettings/userSettings.css`,
				`${settingsLocation}fragments/userSettings/userSettings.js`,
				() => {
					if (typeof settings_fragmentReady === "function") settings_fragmentReady();
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