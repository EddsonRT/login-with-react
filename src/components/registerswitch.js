export default function registerSwitch() {
  var login = document.getElementById("login");
  var register = document.getElementById("register");
  var loginError = document.getElementById("login-error");
  var emailError = document.getElementById("email-error");
  var passError = document.getElementById("pass-error");
  login.className =
    "animate__animated animate__fadeInLeft container-login display-none";
  register.className =
    "animate__animated animate__fadeInLeft container-register";
  loginError.className =
    "animate__animated animate__fadeInLeft login-error display-none";
  emailError.className =
    "animate__animated animate__fadeInLeft register-error display-none";
  passError.className =
    "animate__animated animate__fadeInLeft register-error display-none";
}
