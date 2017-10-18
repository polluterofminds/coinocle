import React, { Component } from 'react';
import { connect } from "react-redux";
import Payments from './Payments';
import AddTransactionButton from "./AddTransactionButton";

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

        			<a href="/auth/google" className="social-button" id="google-connect"> <span>Connect with Google</span></a>
        			<a href="/auth/twitter" className="social-button" id="twitter-connect"> <span>Connect with Twitter</span></a>
    		    </div>
          </div>
        );
      default:
      if(this.props.auth.credits > 0){
        return (
          <div className="main-content">
          <div className="billingBackground">
            <h1 className="text-center billing-header">Billing</h1>
            <h2 className="plan-name text-center">Your Plan: {planName}</h2>
            <h2 className="amount-owed text-center">Amount Due: $0.00</h2>
            <p className="text-center">

            </p>
          </div>
          <div className="billing-additional">
            <div className="billing-cards text-center">
              <h2 className="text-center">Billing Options</h2>
              <hr />
              <div className="billing-options">
                <p>Refer Coinocle to a friend and get three-months free.</p>
                <p className="billing-small">If you refer someone to Coinocle and they email us at
                 <a href="mailto:coinoclereferrals@coinocle.com"> coinoclereferrals@coinocle.com</a>, if they sign up, and if they reference your
                email address, we will credit your account for three months.</p>
              </div>
              <hr />
              <div className="billing-options">
                <p className="billing-cancel"><a href="mailto:cancel@coinocle.com">Cancel Account</a></p>
              </div>
            </div>
          </div>
          <div>
          </div>
          <AddTransactionButton />
          </div>
        );
      }
      else {
        return (
          <div className="main-content">
          <div className="billingBackground">
            <h1 className="text-center billing-header">Billing</h1>
            <h2 className="plan-name text-center">Your Plan: {planName}</h2>
            <h2 className="amount-owed text-center">Amount Due: {amountDue}</h2>
            <p className="text-center">
              <Payments />
            </p>
          </div>
          <div className="billing-additional">
            <div className="billing-cards text-center">
              <h2 className="text-center">Billing Options</h2>
              <hr />
              <div className="billing-options">
                <p>Refer Coinocle to a friend and get three-months free.</p>
                <p className="billing-small">If you refer someone to Coinocle and they email us at
                 <a href="mailto:coinoclereferrals@coinocle.com"> coinoclereferrals@coinocle.com</a>, if they sign up, and if they reference your
                email address, we will credit your account for three months.</p>
              </div>
              <hr />
              <div className="billing-options">
                <p className="billing-cancel"><a href="mailto:cancel@coinocle.com">Cancel Account</a></p>
              </div>
            </div>
          </div>
          <AddTransactionButton />
          </div>
        );
      }
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
