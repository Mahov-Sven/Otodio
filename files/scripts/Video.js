class Video {
    constructor(id, title) {
    	this.id = id;
        this.title = title;
    }

    load() {
        return loadVideo(id);
    }

    toString() {
    	return this.title;
    }
}