class Session {
	constructor(){
		this._started = false;
		this._username = undefined;
		this._password = undefined;
		this._playlists = [];
		this._settings = new Settings();
	}
	
	start(username, password){
		this.username = username;
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
	
	get settings(){
		return this._started ? this._settings : undefined;
	}
}