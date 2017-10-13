import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css';

import Header from './Header';
import Landing from './Landing';
import Wallets from './Wallets';
import Billing from './Billing';
import NewWallet from './NewWallet';
import Dashboard from "./Dashboard";
import NewTransaction from "./NewTransaction";
const WalletLink = () => <h2>Sup</h2>
// const Settings = () => <h2>Settings</h2>;
// const Wallets = () => <h2>Wallets</h2>;
// const Transactions = () => <h2>Transactions</h2>;

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
            <Route exact path="/wallets" component={Wallets} />
            <Route exact path="/billing" component={Billing} />
            <Route exact path="/wallets/new" component={NewWallet} />
            <Route exact path="/transactions/new" component={NewTransaction} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
