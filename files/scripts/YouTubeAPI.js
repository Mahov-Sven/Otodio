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
}




//This code loads the IFrame Player API code asynchronously
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//This function creates an <iframe> (and YouTube player)
//after the API code downloads.

function onYouTubeIframeAPIReady() {
   Globals.player = new YT.Player('player', {
  		height: '90%',
  		width: '90%',
      videoId: '',
  		events: {
        'onReady': onPlayerReady,
        'onStateChange': onStateChange
      }
	});
}

function onPlayerReady(event){
  event.target.loadVideoById(Globals.session.currentPlaylist.videos[0]);
}
function onStateChange(event){
  if(event.data === 0){
    event.target.loadVideoById(Globals.session.currentPlaylist.next());
  }
}
//TODO login with youtube function(extra)

//Retrieves all videos from a youtube playist
function importPlaylist(playlistID, updateProgress = function(){console.log('Next Part');}, pageToken=null, currentPlaylist=[]){
  let requestOptions = {
    playlistId: playlistID,
    part: 'snippet',
    maxResults: 50
  };
  if(pageToken){
    requestOptions.pageToken = pageToken;
  }
  let request = gapi.client.youtube.playlistItems.list(requestOptions);
  request.execute(function(response) {
    let playlistItems = response.result.items;
    if (playlistItems) {
      if(response.result.nextPageToken){
        let videoItems = [];
        for(let i = 0; i < playlistItems.length; i++){
          videoItems.push(playlistItems[i].snippet.resourceId.videoId);
        }
        updateProgress();
        importPlaylist(playlistID, updateProgress, response.result.nextPageToken, currentPlaylist.concat(videoItems));
      }else{
        let videoItems = [];
        for(let i = 0; i < playlistItems.length; i++){
          videoItems.push(playlistItems[i].snippet.resourceId.videoId);
        }
        updateProgress();
        console.log(currentPlaylist.concat(videoItems));
        Globals.session.currentPlaylist = currentPlaylist.concat(videoItems);
      }
    } else {
      console.log("Invalid Playlist Id");
    }
  });
}

function loadVideo(){
  Globals.player.nextVideo();
}