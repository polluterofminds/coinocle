import React, { Component } from 'react';
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import WalletForm from "./WalletForm";
import WalletReview from "./WalletFormReview";
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
        			<a href="/auth/facebook" className="social-button" id="facebook-connect"> <span>Connect with Facebook</span></a>
        			<a href="/auth/google" className="social-button" id="google-connect"> <span>Connect with Google</span></a>
        			<a href="/auth/twitter" className="social-button" id="twitter-connect"> <span>Connect with Twitter</span></a>
    		    </div>
          </div>
        );
      default:
        if (this.state.showReviewForm) {
          return (
            <WalletReview
              onCancel={() => this.setState({ showReviewForm: false })}
            />);
        } else {
        return  (
          <WalletForm onWalletSubmit={() => this.setState({ showReviewForm: true })} />);
      }
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

NewWallet = reduxForm({
  form: "walletForm"
})(NewWallet);

export default connect(mapStateToProps)(NewWallet);
