var profile;

renderButton();

function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    if (googleUser) {

        // Hide the sign-in button now that the user is authorized, for example:
        $('#LOGIN').attr('style', 'display: none');

        $('#LOGOUT').attr('style', 'display: block');
        $('#loginBox').attr('style', 'display: none');
        $('#signedIn').attr('style', 'display: block');
        $('#userName').innerText = googleUser.getBasicProfile().getName();
        alert("Welcome To Otodio "+ googleUser.getBasicProfile().getName());
        userProfile(googleUser);
        profile = googleUser.getBasicProfile();
    } else {
        // There was an error.
    }

}

function userProfile(googleUser){
    let img = document.createElement("img");
    img.src = googleUser.getBasicProfile().getImageUrl();
    src = document.getElementById("profilePic");
    src.appendChild(img);
    document.getElementById("fullName").innerHTML = 'Full Name : '+ googleUser.getBasicProfile().getName();
    document.getElementById("givenName").innerHTML = 'Given Name : '+ googleUser.getBasicProfile().getGivenName();
    document.getElementById("email").innerHTML = 'email: '+ googleUser.getBasicProfile().getEmail();


}
function onFailure(error) {
    console.log(error);
    console.log("Login Failure");
}

function start() {
    gapi.load('auth2', function() {
        auth2 = gapi.auth2.init({
            client_id: '489675414438-lirsd0jglncbanp7ibhql36io61lcq94.apps.googleusercontent.com.apps.googleusercontent.com',
        });
    });
}

function renderButton() {

    gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}