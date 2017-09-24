import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';

class NewWallet extends Component {
  render() {
    return (
        <div>
          <div className="addWallet">
            <h1 className="text-center">Add a wallet & starting balance</h1>
            <div className="text-center">
              <form>
                <p>Enter wallet name</p>
                <input className="wallet-input" type="text" name="Wallet name" placeholder="Wallet name" />
                <p>Enter coin type</p>
                <input type="text" className="wallet-input" name="Coin type" placeholder="Coin type" />
                <p>Enter starting coin balance</p>
                <input className="wallet-input" type="text" name="Coins" placeholder="Total coins owned" />
                <p><input type="submit" value="Save" className="wallet-save" /></p>
              </form>
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

export default NewWallet;
