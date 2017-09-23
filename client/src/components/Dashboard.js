import React, { Component } from 'react';
import './App.css';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <h2>Dashboard</h2>
          <div>
            <h1 className="total-wallet-value">$0.00</h1>
            <h3>Total Current Value</h3>
            <div className="wallet-table">
              <table className="table table-bordered table-striped table-hover">
                <tr>
                  <th className="text-center">Wallet Name</th>
                  <th className="text-center">Current Value</th>
                </tr>
                <tr>
                  <td>
                    <a className="addAWallet" href="#">
                      Add a wallet
                    </a>
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

export default Dashboard;
