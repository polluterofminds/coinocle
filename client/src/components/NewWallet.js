//NewWallet shows WalletForm

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import WalletForm from "./WalletForm";
import './App.css';

class NewWallet extends Component {

  render() {
    return (
        <div>
          <WalletForm />
        </div>
    );
  }
}

export default NewWallet;
