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
  		videoId: 'M7lc1UVf-VE',
  		events: {
    		'onReady': onPlayerReady,
    		'onStateChange': onPlayerStateChange
  		}
	});
}
//The API will call this function when the video player is ready.

function onPlayerReady(event) {
	event.target.playVideo();
}

//The API calls this function when the player's state changes.
function onPlayerStateChange(event) {
}

//Stops the video.
function stopVideo() {
	player.stopVideo();
}
