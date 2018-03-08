

class Playlist {
    constructor() {
        this.videos = [];
    }

    static merge(...playlists) {
        const playlist = new Playlist();
        Array.prototype.concat.apply(playlist.videos, playlists);
        return playlist;
    }

    add(video) {
        this.videos.push(video);
    }

    reorder(i, j) {
        this.videos.splice(j, 0, this.videos.splice(i, 1));
    }

    findIndex(obj) {
        return this.videos.findIndex(video => video === obj);
    }

    get size() {
        return this.videos.length;
    }

    get length() {
        /*
         * returns the length of the playlist in seconds
         */
        let time = 0;
        this.videos.map(video => time += video.length);
        return time;
    }
}