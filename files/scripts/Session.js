class Session {
	constructor(){
		this._started = false;
		this._username = undefined;
		this._password = undefined;
		this._playlists = new Set();
		this._currentPlaylist = undefined;
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

	set playlists(playlist){
		this._started ? this._playlists.add(playlist) : undefined;
	}

	get currentPlaylist(){
		return this._started ? this._currentPlaylist : undefined;
	}

	set currentPlaylist(playlist){
		this._currentPlaylist = this._started ? playlist : undefined;
	}
	
	get settings(){
		return this._started ? this._settings : undefined;
	}
}