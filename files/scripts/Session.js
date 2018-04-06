class Session {
	constructor(){
		this._started = false;
		this._username = undefined;
		this._password = undefined;
		this._playlists = new Set();
		this._currentPlaylist = undefined;
		this._settings = new Settings();
	}

	/**
	 * Resets this Session object to have empty/undefined fields.
	 */
	reset(){
		this._started = false;
		this._username = undefined;
		this._password = undefined;
		this._playlists = new Set();
		this._currentPlaylist = undefined;
		this._settings = new Settings();
	}

	start(username, password){
		this.reset();
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
		if(!this.started) return undefined;
		return this._username;
	}

	get playlists(){
		if(!this.started) return undefined;
		return this._playlists;
	}

	set playlists(playlist){
		if(!this.started) return;
		this._playlists.add(playlist);
	}

	addPlaylist(playlist){
		if(!this.started) return;
		if(this._playlists.size === 0) $("#TAB_PLAYLIST").parent().fadeIn();
		this._playlists.add(playlist);
	}

	get currentPlaylist(){
		if(!this.started) return undefined;
		return this._started ? this._currentPlaylist : undefined;
	}

	set currentPlaylist(playlist){
		if(!this.started) return;
		if(!this._currentPlaylist) $("#TAB_VIDEO").parent().fadeIn();
		this._currentPlaylist = playlist;
	}

	get settings(){
		if(!this.started) return undefined;
		return this._settings;
	}
}
