

class Playlist {
    constructor() {
        this.videos = [];
    }

    static merge(...playlists) {
        /*
         * taking two or more playlists, merge them into one new playlist
         */
        if (playlists.length < 2) {
            console.error('Attempted to merge one or fewer playlists. Cancelling...');
            return undefined;
        }
        const playlist = new Playlist();
        // apply the concat function to each playlist in the passed argument
        Array.prototype.concat.apply(playlist.videos, playlists);
        return playlist;
    }

    next() {
        // if the replay setting is active, then just continue with the current video
        if (Globals.session.settings.video.replay) {
            return this.videos[0];
        }
        /*
         * move the video to the end of the list,
         * shuffle if the setting is active
         */
        const video = this.videos.shift();
        this.videos.push(video);
        if (Globals.session.settings.video.shuffle) {
            this.shuffle();
        }
        return video;
    }

    shuffle() {
        /*
         * Fisher-Yates shuffle implementation
         */
        for (let i = this.videos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.videos[i];
            this.videos[i] = this.videos[j];
            this.videos[j] = temp;
        }
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
        let time = 0;
        this.videos.map(video => time += video.length);
        return time;
    }
}