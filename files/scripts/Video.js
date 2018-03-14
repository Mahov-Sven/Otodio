class Video {
    constructor(id, name) {
    	this.id = id;
        this.name = name;
        this.thumbnail;
    }

    load() {
        return loadVideo(id);
    }

    toString() {
    	return this.name;
    }
}