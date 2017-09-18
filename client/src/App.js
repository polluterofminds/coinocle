import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import logo from "./logoWhite.png";
import googleButton from "./googlesignin.png";
import "./App.css";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Billing from "./Billing";
const NewTransaction = () => <h2>NewTransaction</h2>;
const AddWallet = () => <h2>AddWallet</h2>;
const Settings = () => <h2>Settings</h2>;
const Wallets = () => <h2>Wallets</h2>;
const Transactions = () => <h2>Transactions</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/billing" component={Billing} />
            <Route exact path="/transactions/new" component={NewTransaction} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions) (App);
