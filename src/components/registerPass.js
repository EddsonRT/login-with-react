export default function registerPass() {
  var loginCard = document.getElementById("login-card");
  var loginCardLeft = document.getElementById("login-card__left");
  var loginCardRight = document.getElementById("login-card__right");
  var registerError = document.getElementById("register-error");
  var emailError = document.getElementById("email-error");
  var passError = document.getElementById("pass-error");
  var registerSuccessful = document.getElementById("register-successful");
  var userEmail = document.getElementById("useremail").value;
  var passEmail = document.getElementById("passemail").value;
  var arrobaEmail = userEmail.includes("mail.com");
  if (arrobaEmail === true && passEmail.length >= 8) {
    registerSuccessful.className = "register-successful";
    loginCard.className = "login-card display-none";
    loginCardLeft.className = "login-card__left display-none";
    loginCardRight.className = "login-card__right display-none";
  } else if (arrobaEmail === false) {
    registerError.className =
      "animate__animated animate__fadeInLeft register-error display-none";
    emailError.className =
      "animate__animated animate__fadeInLeft register-error";
    passError.className =
      "animate__animated animate__fadeInLeft register-error display-none";
  } else if (passEmail.length < 8) {
    registerError.className =
      "animate__animated animate__fadeInLeft register-error display-none";
    emailError.className =
      "animate__animated animate__fadeInLeft register-error display-none";
    passError.className =
      "animate__animated animate__fadeInLeft register-error";
  } else {
    registerError.className =
      "animate__animated animate__fadeInLeft register-error";
    emailError.className =
      "animate__animated animate__fadeInLeft register-error display-none";
    passError.className =
      "animate__animated animate__fadeInLeft register-error display-none";
  }
}
