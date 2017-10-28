import React, { Component } from 'react';
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import WalletForm from "./WalletForm";
import WalletReview from "./WalletFormReview";
import { Link } from "react-router-dom";
import coinbase from "../assets/coinbase.png";
import './App.css';

class NewWallet extends Component {

  state = { showReviewForm: false };

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

        			<a href="/auth/google" className="social-button" id="google-connect"> <span>Connect with Google</span></a>
        			<a href="/auth/twitter" className="social-button" id="twitter-connect"> <span>Connect with Twitter</span></a>
    		    </div>
          </div>
        );
      default:
        return (
          <div>
            <h1 className="text-center">How would you like to add your wallet?</h1>
            <div className="row wallet-options">
              <div className="col-md-4">
                <div className="card">
                  <Link to={"/wallets/new/manual"}><h4 className="text-center"><span className="glyphicon glyphicon-pencil text-center"></span>Manual Entry</h4></Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <Link to={"/wallets/new/address"}><h4 className="text-center"><span className="text-center glyphicon glyphicon-bitcoin"></span>Enter Public Address</h4></Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h4 className="text-center"><img className="text-center img-responsive coinbase-logo" src={coinbase} />Connect to Coinbase</h4>
                  <p className="text-center">Coming soon</p>
                </div>
              </div>
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NewWallet);
