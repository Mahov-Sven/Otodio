//This authenticates the Youtube Data API and loads the Javascript API Library.
function authenticateAPI() {
  //Initialize the JavaScript client library.
  gapi.client.init({
    'discoveryDocs': ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
    'apiKey': 'AIzaSyC_SVhOgn8VxxKWQQ6Vk9XZwwp8Z_EgCS4',
    'scope': 'https://www.googleapis.com/auth/youtube.readonly',
  });
};

function handleClientLoad(){
  gapi.load('client', authenticateAPI);

  console.log('GAPI LOADED');
}




//This code loads the IFrame Player API code asynchronously
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//This function creates an <iframe> (and YouTube player)
//after the API code downloads.

function onYouTubeIframeAPIReady() {
	const player = new YT.Player('player', {
  		height: '90%',
  		width: '90%',
      videoId: '',
  		events: {
    		'onReady': onPlayerReady
  		}
	});
}

//TODO login with youtube function(extra)

//Retrieves all videos from a youtube playist
function importPlaylist(playlistID, updateProgress = function(){console.log('Next Part');}, pageToken=null, currentPlaylist=[]){
  var requestOptions = {
    playlistId: playlistID,
    part: 'snippet',
    maxResults: 50
  };
  if(pageToken){
    requestOptions.pageToken = pageToken;
  }
  var request = gapi.client.youtube.playlistItems.list(requestOptions);
  request.execute(function(response) {
    var playlistItems = response.result.items;
    if (playlistItems) {
      if(response.result.nextPageToken){
        updateProgress();
        importPlaylist(playlistID, updateProgress, response.result.nextPageToken, currentPlaylist.concat(playlistItems));
      }else{
        updateProgress();
        console.log(currentPlaylist.concat(playlistItems));
        session.addPlaylist(currentPlaylist.concat(playlistItems));
      }
    } else {
      console.log("Invalid Playlist Id");
    }
  });
}

//TODO load playlist function
function loadVideo(videoId){
  //Select youtube player from page
  //Load playlist
  //Next video
}

//TODO Next Video

//TODO Retrieve Video Pictures
