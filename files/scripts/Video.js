class Video {
    constructor(id) {
    	this.id = id;
        this.title = '';
        this.length = 0; // as seconds
    }

    load() {
        return loadVideo(id);
    }

    toString() {
    	return this.title;
    }
}