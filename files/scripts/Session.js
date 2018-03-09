class Session {
	constructor(){
		this.username = undefined;
		this.password = undefined;
		this.playlists = [];
		this.settings = new Settings();
	}
	
	start(username, password){
		this.username = username;
		/* TODO  */
	}
}