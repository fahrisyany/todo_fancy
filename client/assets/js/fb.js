// var FB = require("fb");

window.fbAsyncInit = function() {
  FB.init({
    appId: "277442853059545",
    autoLogAppEvents: true,
    xfbml: true,
    version: "v3.1"
  });
};
(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
const access_token = localStorage.getItem("token");
if (access_token) {
  window.location = "http://35.240.228.34/index.html";
}
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    console.log(response);
    if (response.status === "connected") {
      axios
        .post(
          "http://35.240.228.34/signin/facebook",
          response.authResponse
        )
        .then(result => {
          console.log('yesss');
          
          localStorage.setItem("token", result.data.token);
          window.location = "http://35.240.228.34/index.html";
        })
        .catch(err => {
          console.log("masuk error fb");
          console.log(err);
        });
      console.log("Berhasil login");
    }
  });
}
