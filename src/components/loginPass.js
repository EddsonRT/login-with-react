export default function loginPass() {
  var loginSuccessful = document.getElementById("login-successful");
  var loginCard = document.getElementById("login-card");
  var loginCardLeft = document.getElementById("login-card__left");
  var loginCardRight = document.getElementById("login-card__right");
  var loginError = document.getElementById("login-error");
  var username = document.getElementById("username").value;
  var userpass = document.getElementById("password").value;
  var usernameCorrect = username == "admin";
  var userpassCorrect = userpass == 12345;
  if (usernameCorrect === true && userpassCorrect === true) {
    loginSuccessful.className = "login-successful";
    loginCard.className = "login-card display-none";
    loginCardLeft.className = "login-card__left display-none";
    loginCardRight.className = "login-card__right display-none";
  } else {
    loginError.className = "animate__animated animate__fadeInLeft login-error";
  }
}
