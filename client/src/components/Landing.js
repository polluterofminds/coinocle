import React, { Component } from 'react';
import googleButton from '../assets/googlesignin.png';
import twitterButton from '../assets/sign-in-with-twitter-link.png';
import './App.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="text-center welcome-text">
          <h2>Welcome!</h2>
          <h2>Log in or sign up.</h2>
          <div className="row">
            <div className = "col-md-4">
              <a href="/auth/google">
                <img
                  className="googleButton"
                  src={googleButton}
                  alt="google sign in button"
                />
              </a>
            </div>
            <div className = "col-md-4">
              <a href="/auth/twitter">
                <img
                  className="twitterButton"
                  src={twitterButton}
                  alt="twitter sign in button"
                />
              </a>
            </div>
            <div className = "col-md-4">
              <a href="/auth/github" className="githubButton">
                Sign in with GitHub
              </a>
            </div>
          </div>
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
