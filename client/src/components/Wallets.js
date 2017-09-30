import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import WalletsList from "./WalletsList";
import "./App.css";

class Wallets extends Component {
constructor(){
  super();
}

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
          <div className="container text-center">
            <h2>Dashboard</h2>
            <h4>Total Current Value</h4>
            <div>
              <Link to="/dashboard">
                <h1 className="total-wallet-value">$0.00</h1>
              </Link>
              <h3>Wallets</h3>
              <WalletsList />

            </div>
          </div>
          <div className="addTransactionButton">
            <a href="#" className="text-center plus-sign">
              +
            </a>
          </div>
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

function mapStateToProps({ auth, form }) {
  return { auth, form };
}
export default connect(mapStateToProps)(Wallets);
