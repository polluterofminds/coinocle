//NewWallet shows WalletForm

import React, { Component } from 'react';
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import WalletForm from "./WalletForm";
import './App.css';

class NewWallet extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
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
      default:
        return (
          <div>
            <WalletForm />
          </div>
        );
      }
    }

  render() {
    return (
        <div>
          {this.renderContent()}
        </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(NewWallet);
