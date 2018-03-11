class Session {
	constructor(){
		this._started = false;
		this._username = undefined;
		this._password = undefined;
		this._playlists = [];
		this._currentPlaylist = new Playlist(["Woorod1gJ_w", "AS4q9yaWJkI", "fzQ6gRAEoy0", "aYNWEdA67fQ", "M7VIDzmrpx4",
    "-tKVN2mAKRI", "4eBH5zdaLRk", "Nmqr9lADWhM", "qfX6MjpQNfI", "bdcAV-HawpE"]);
		this._settings = new Settings();
	}
	
	start(username, password){
		this._username = username;
		// TODO
		this._started = true;
	}
	
	end(){
		this._started = false;
		// TODO
	}
	
	isGuest(){
		return this._username == "guest" && this._password == "guest";
	}
	
	save(){
		if(this.isGuest()) return;
		// TODO
	}
	
	get started(){
		return this._started;
	}
	
	get username(){
		return this._started ? this._username : undefined;
	}
	
	get playlists(){
		return this._started ? this._playlists : undefined;
	}

	get currentPlaylist(){
		return this._started ? this._currentPlaylist : this._currentPlaylist;
	}
	
	get settings(){
		return this._started ? this._settings : undefined;
	}
}