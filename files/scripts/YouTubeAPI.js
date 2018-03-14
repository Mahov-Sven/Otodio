class YouTubeAPI {

	/**
	 * This authenticates the Youtube Data API and loads the Javascript API
	 * Library.
	 */
	static authenticateAPI() {
		// Initialize the JavaScript client library.
		gapi.client.init({
			'discoveryDocs' : [ "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest" ],
			'apiKey' : 'AIzaSyC_SVhOgn8VxxKWQQ6Vk9XZwwp8Z_EgCS4',
			'scope' : 'https://www.googleapis.com/auth/youtube.readonly',
		});
	};

	static handleClientLoad() {
		gapi.load('client', YouTubeAPI.authenticateAPI);
	}

	/**
	 * This function creates an <iframe> (and YouTube player) after the API code
	 * downloads.
	 */
	static onYouTubeIframeAPIReady() {
		Globals.player = new YT.Player('player', {
			height : '90%',
			width : '90%',
			videoId : '',
			events : {
				'onReady' : YouTubeAPI.onPlayerReady,
				'onStateChange' : YouTubeAPI.onStateChange
			}
		});
	}

	static onPlayerReady(event) {
		if (Globals.session.currentPlaylist == undefined) {
			Globals.session.currentPlaylist = Globals.session.playlists.entries().next().value;
		}
		event.target.loadVideoById(Globals.session.currentPlaylist.videos[0].id);
	}

	static onStateChange(event) {
		if (event.data === 0) {
			console.log("NEXT VIDEO");
			event.target.loadVideoById(Globals.session.currentPlaylist.next().id);
		}
	}

	static importThumbnail(videoId, afterCompletion = function() {}) {
		let requestOptions = {
			id : videoId,
			part : 'snippet',
		};
		let request = gapi.client.youtube.videos.list(requestOptions);
		request.execute(function(response) {
			const thumbnails = response.result.items[0].snippet.thumbnails;
			if (thumbnails.maxres != undefined) {
				afterCompletion(thumbnails.maxres.url);
			} else if (thumbnails.standard != undefined) {
				afterCompletion(thumbnails.standard.url);
			} else if (thumbnails.high != undefined) {
				afterCompletion(thumbnails.high.url);
			} else if (thumbnails.medium != undefined) {
				afterCompletion(thumbnails.medium.url);
			} else {
				afterCompletion(thumbnails.default.url);
			}
		});
	}

	/**
	 * Retrives all videos from a YouTube playlist
	 */
	static importPlaylist(playlistId, updateProgress = () => {
			console.log('Next Part');
		}, pageToken = null, currentPlaylist = []) {
		
		const urlRegex = /^(https:\/\/)?www\.youtube\.com\/playlist\?(([a-zA-Z0-9-_]+=[a-zA-Z0-9-_]+&)?)*list=([a-zA-Z0-9-_]+)(&([a-zA-Z0-9-_]+=[a-zA-Z0-9-_]+)?)*$/;
		const idRegex = /^[a-zA-Z0-9-_]+$/;
		if(!urlRegex.test(playlistId)){
			if(!idRegex.test(playlistId)){
				throw new Error("Bad YouTube Playlist URL Given");
			}
		}else{
			playlistId = playlistId.replace(urlRegex, "$4");
		}

		let requestOptions = {
			playlistId : playlistId,
			part : 'snippet',
			maxResults : 50
		};
		if (pageToken) {
			requestOptions.pageToken = pageToken;
		}
		let request = gapi.client.youtube.playlistItems.list(requestOptions);
		request.execute((response) => {
			let playlistItems = response.result.items;
			if (playlistItems) {
				if (response.result.nextPageToken) {
					let videoItems = [];
					for (let i = 0; i < playlistItems.length; i++) {
						let nextVideo = new Video(playlistItems[i].snippet.resourceId.videoId, playlistItems[i].snippet.title);
						YouTubeAPI.importThumbnail(nextVideo.id, (thumbnail)=> {
							nextVideo.thumbnail = thumbnail;
						});
						videoItems.push(nextVideo);
					}
					updateProgress();
					YouTubeAPI.importPlaylist(playlistId, updateProgress, response.result.nextPageToken, currentPlaylist.concat(videoItems));
				} else {
					let videoItems = [];
					for (let i = 0; i < playlistItems.length; i++) {
						let nextVideo = new Video(playlistItems[i].snippet.resourceId.videoId, playlistItems[i].snippet.title);
						YouTubeAPI.importThumbnail(nextVideo.id, (thumbnail)=> {
							nextVideo.thumbnail = thumbnail;
						});
						videoItems.push(nextVideo);
					}
					updateProgress();
					let finalVideoArray = currentPlaylist.concat(videoItems);
					console.log(finalVideoArray);
					YouTubeAPI.importThumbnail(finalVideoArray[0].id, (thumbnail) => {
						Globals.session.playlists = (new Playlist("Temp Name", finalVideoArray, thumbnail));
					});
				}
			} else {
				console.log("Invalid Playlist Id");
			}
		});
	}
}

// This code loads the IFrame Player API code asynchronously
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);