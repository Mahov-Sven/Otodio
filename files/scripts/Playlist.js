class Playlist {
    constructor(videos) {
        this.videos = videos;
        this.oldVideos = videos;
    }

    static merge(...playlists) {
        /*
         * taking two or more playlists, merge them into one new playlist
         */
        if (playlists.length < 2) {
            console.log('Attempted to merge one or fewer playlists. Cancelling...');
            return undefined;
        }
        const playlist = new Playlist();
        // apply the concat function to each playlist in the passed argument
        Array.prototype.concat.apply(playlist.videos, playlists);
        return playlist;
    }

    next() {
        // if the replay setting is active, then just continue with the current video
        // if (Globals.session.settings.video.replay) {
        //     return this.videos[0];
        // }
        
        // need to move the last played video to the end and return the first
        const prevVideo = this.videos.shift();
        this.videos.push(prevVideo);
        return this.videos[0];
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

    unShuffle() {
        let indexOfPlaying = this.oldVideos.find(this.videos[0]);
        let second = this.oldVideos.splice(indexOfPlaying);
        this.videos = second.push(this.oldVideos);
        this.oldVideos = this.videos;
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