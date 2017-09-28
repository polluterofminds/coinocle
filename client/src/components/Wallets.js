import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./App.css";

class Wallets extends Component {
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
            <div>
              <Link to="/dashboard">
                <h1 className="total-wallet-value">$0.00</h1>
              </Link>
              <h3>Total Current Value</h3>
              <div className="wallet-table">
                <table className="table table-bordered table-striped table-hover">
                  <tr>
                    <th className="text-center">Wallet Name</th>
                    <th className="text-center">Current Value</th>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/wallets/new" className="addAWallet" href="#">
                        Add a wallet
                      </Link>
                    </td>
                    <td className="empty-state">$0.00</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="emptyTD" />
                    </td>
                    <td>
                      <span className="emptyTD" />
                    </td>
                  </tr>
                </table>
                <h3>Wallets</h3>
              </div>
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

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Wallets);
