import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import WalletsList from "./WalletsList";
import TotalValue from "./TotalValue";
import AddTransactionButton from "./AddTransactionButton";
import axios from "axios";
import "./App.css";

class Wallets extends Component {

  constructor() {
    super();
    this.state = {
      btcprice: "",
      ltcprice: "",
      ethprice: ""
    };
  }


  componentWillMount() {
    this.getData = () => {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD"
      )
      .then(res => {
        this.setState({ btcprice: res.data.BTC.USD });
        this.setState({ ethprice: res.data.ETH.USD });
        this.setState({ ltcprice: res.data.LTC.USD });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

componentDidMount() {
  this.getData();
  this.refresh = setInterval(() => this.getData(), 5000);
}


  renderContent() {
    var bitcoin = this.state.btcprice;
    var ethereum = this.state.ethprice;
    var litecoin = this.state.ltcprice;

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
          <div className="main-content">
          <div className="marquee">
            <p><span className="ticker-span">BTC: ${bitcoin}</span>  <span className="ticker-span">ETH: ${ethereum}</span>  <span className="ticker-span">LTC: ${litecoin}</span></p>
          </div>
          <div className="container text-center">
            <h2>Dashboard</h2>
            <h4>Total Current Value</h4>
            <div>
              <Link to="/dashboard">
                <TotalValue />
              </Link>
              <h3>Wallets</h3>
              <WalletsList />

            </div>
          </div>
          <AddTransactionButton />
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


// <div className="row currency">
//   <div className="col-md-4 card-1">
//   <h4>BTC</h4>
//     <h2>${bitcoin}</h2>
//   </div>
//   <div className="col-md-4 card-1">
//   <h4>ETH</h4>
//   <h2>${ethereum}</h2>
//   </div>
//   <div className="col-md-4 card-1">
//   <h4>LTC</h4>
//   <h2>${litecoin}</h2>
//   </div>
// </div>
