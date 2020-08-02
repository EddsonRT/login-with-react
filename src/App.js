import React from "react";
import Logo from "./img/icon.png";
import "animate.css";
import "normalize.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import registerSwitch from "./components/registerswitch.js";
import loginSwitch from "./components/loginSwitch.js";
import loginPass from "./components/loginPass.js";
import registerPass from "./components/registerPass.js";

function App() {
  return (
    <div className="login">
      <div id="login-successful" className="login-successful display-none">
        <div className="animate__animated animate__fadeInDown login-succesful-content">
          <h1>Login Success</h1>
          <i>
            <FontAwesomeIcon
              className="fas fa-check-circle"
              icon={faCheckCircle}
            />
          </i>
        </div>
      </div>
      <div
        id="register-successful"
        className="register-successful display-none"
      >
        <div className="animate__animated animate__fadeInDown register-successful-content">
          <i>
            <FontAwesomeIcon
              className="fas fa-check-circle"
              icon={faCheckCircle}
            />
          </i>
          <h1>Register Success</h1>
          <p>
            Thank you. We have sent you email, Please click the link in that
            message to activate your account.
          </p>
        </div>
      </div>
      <div id="login-card" className="login-card">
        <div id="login-card__left" className="login-card__left">
          <img className="img-icon" src={Logo} alt="icon" />
          <div className="animate__animated animate__fadeInDown get-started">
            <div className="get-started__info">
              <h1>Get Started</h1>
              <a target="blank" href="https://www.google.com/">
                <input type="button" value="Sign in with Google+" />
              </a>
              <a target="blank" href="https://www.facebook.com/">
                <input type="button" value="Sign in with Facebook" />
              </a>
              <a target="blank" href="https://www.google.com/">
                <FontAwesomeIcon className="social" icon={faGooglePlusG} />
              </a>
              <a target="blank" href="https://www.facebook.com/">
                <FontAwesomeIcon className="social" icon={faFacebook} />
              </a>
            </div>
          </div>
        </div>
        <div id="login-card__right" className="login-card__right">
          <div className="animate__animated animate__fadeInUp login-register">
            <input
              id="login-button"
              className="login-button"
              type="button"
              value="Log In"
              onClick={loginSwitch}
            />
            <input
              id="register-button"
              className="register-button"
              type="button"
              value="Register"
              onClick={registerSwitch}
            />
          </div>
          <div
            id="login"
            className="animate__animated animate__fadeInLeft container-login"
          >
            <h1>Log In</h1>
            <div className="register-input">
              <h2>Username</h2>
              <input
                id="username"
                className="input-text"
                type="text"
                placeholder="Type here your name..."
              />
              <h2>Password</h2>
              <input
                id="password"
                className="input-text"
                type="password"
                placeholder="Type here your password..."
              />
            </div>
            <input
              id="send-button-login"
              className="signin-button"
              type="button"
              value="Sign In"
              onClick={loginPass}
            />
            <div className="forgot-password">
              <a href="/#">
                <span>Forgot Password</span>
              </a>
              <a id="not-a-member-yet" href="/#" onClick={registerSwitch}>
                <span>
                  Not a <u>Member</u> yet
                </span>
              </a>
            </div>
            <div
              id="login-error"
              className="animate__animated animate__fadeInLeft login-error display-none"
            >
              <p>
                Error! The user is wrong
                <span>
                  <a href="/#">¿forgot password?</a>
                </span>
              </p>
            </div>
          </div>
          <div
            id="register"
            className="animate__animated animate__fadeInLeft container-register display-none"
          >
            <h1>Register</h1>
            <div className="register-input">
              <h2>Email</h2>
              <input
                id="useremail"
                className="input-text"
                type="text"
                placeholder="Type here your email@email.com..."
              />
              <h2>Password</h2>
              <input
                id="passemail"
                className="input-text"
                type="password"
                placeholder="Type here your password..."
              />
            </div>
            <input
              id="send-button-register"
              className="signin-button"
              type="button"
              value="Register"
              onClick={registerPass}
            />
            <div
              id="register-error"
              className="animate__animated animate__fadeInLeft register-error display-none"
            >
              <p>a problem has been occurred while submitting your data</p>
            </div>
            <div
              id="email-error"
              className="animate__animated animate__fadeInLeft register-error display-none"
            >
              <p>Your email must contain @email.com</p>
            </div>
            <div
              id="pass-error"
              className="animate__animated animate__fadeInLeft register-error display-none"
            >
              <p>Your Password Security Is Weak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
