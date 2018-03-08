//https://developers.google.com/youtube/iframe_api_reference

//This code loads the IFrame Player API code asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//This function creates an <iframe> (and YouTube player)
//after the API code downloads.

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
  		height: '390',
  		width: '640',
  		events: {
    		'onReady': onPlayerReady,
    		'onStateChange': onPlayerStateChange
  		}
	});
}
//The API will call this function when the video player is ready.

function onPlayerReady(event) {
	event.target.loadPlaylist("https://www.youtube.com/playlist?list=PL02nT4Qj4Z2R7AxNY6_CCDmHLuBX-9qe2");
	event.target.playVideo();
}

//The API calls this function when the player's state changes.
function onPlayerStateChange(event) {
}

//Stops the video.
function stopVideo() {
	player.stopVideo();
}
