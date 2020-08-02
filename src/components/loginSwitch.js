export default function loginSwitch() {
  var login = document.getElementById("login");
  var register = document.getElementById("register");
  var registerError = document.getElementById("register-error");
  var emailError = document.getElementById("email-error");
  var passError = document.getElementById("pass-error");
  login.className = "animate__animated animate__fadeInLeft container-login";
  register.className =
    "animate__animated animate__fadeInLeft container-register display-none";
  registerError.className =
    "animate__animated animate__fadeInLeft register-error display-none";
  emailError.className =
    "animate__animated animate__fadeInLeft register-error display-none";
  passError.className =
    "animate__animated animate__fadeInLeft register-error display-none";
}
