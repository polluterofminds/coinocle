import React, { Component } from 'react';
import logo from './logoWhite.png';
import googleButton from './googlesignin.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="glyphicon glyphicon-option-vertical"></span>

              </button>
              <a className="navbar-brand" href="#"><img src={logo} alt="Coinocle" /></a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="http://coinocle.com">Home <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Sign In</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="text-center welcome-text">
          <h2>Welcome!</h2>
          <h2>Log in or sign up.</h2>
          <a href="/auth/google"><img className="googleButton" src={googleButton} alt="google sign in button"/></a>
          <div className="signUpButton"><a href="/auth/google"><p>Sign up</p></a></div>
        </div>
      </div>

    );
  }
}

export default App;
