import React, { Component } from "react";
import logo from "./logoWhite.png";
import googleButton from "./googlesignin.png";
import "./App.css";

class Landing extends Component {
  render () {
    return (
      <div>
      <div className="text-center welcome-text">
        <h2>Welcome!</h2>
        <h2>Log in or sign up.</h2>
        <a href="/auth/google">
          <img
            className="googleButton"
            src={googleButton}
            alt="google sign in button"
          />
        </a>
        <div className="signUpButton">
          <a href="/auth/google">
            <p>Sign up</p>
          </a>
        </div>
      </div>
      </div>
    );
  }
}

export default Landing;
