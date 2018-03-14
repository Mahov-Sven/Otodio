class Video {
    constructor(id, title) {
    	this.id = id;
        this.title = title;
        this.thumbnail = "files/res/img/Video_Play_Active.png"
    }

    load() {
        return loadVideo(id);
    }

    toString() {
    	return this.title;
    }
}