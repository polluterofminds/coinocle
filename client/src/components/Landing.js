import React, { Component } from "react";
import "./App.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="text-center welcome-text">
          <h2>Welcome!</h2>
          <h2>Log in or sign up.</h2>
        </div>
        <div className="login-box">
    			<a href="/auth/facebook" className="social-button" id="facebook-connect"> <span>Connect with Facebook</span></a>
    			<a href="/auth/google" className="social-button" id="google-connect"> <span>Connect with Google</span></a>
    			<a href="/auth/twitter" className="social-button" id="twitter-connect"> <span>Connect with Twitter</span></a>
		    </div>
      </div>
    );
  }
}

export default Landing;
