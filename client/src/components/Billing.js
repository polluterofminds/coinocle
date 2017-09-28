import React, { Component } from 'react';
import { connect } from "react-redux";
import Payments from './Payments';

class Billing extends Component {
  renderContent() {
    const planName = 'Yearly';
    const amountDue = '$99.99';
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
          <div className="billingBackground">
            <h1 className="text-center billing-header">Billing</h1>
            <h2 className="plan-name text-center">Your Plan: {planName}</h2>
            <h2 className="amount-owed text-center">Amount Due: {amountDue}</h2>
            <p className="text-center">
              <Payments />
            </p>
          </div>
          <div className="row billing-additional">
            <div className="col-md-6 billing-cards">
              <h2 className="text-center">Billing History</h2>
              <p />
            </div>
            <div className="col-md-6 billing-cards">
              <h2 className="text-center">Switch to a Yearly Plan</h2>
              <p />
            </div>
          </div>
          </div>
        );
      }
    }

  render() {

    return (
      <div className="billing-main">
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Billing);
