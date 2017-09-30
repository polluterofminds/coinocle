import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWallets } from "../actions";
import { Link } from "react-router-dom";

class WalletsList extends Component {

  componentDidMount() {
    this.props.fetchWallets();
  }

  renderWallets() {
    return this.props.wallets.map(wallet => {
      return (
        <tr>
          <td>
            {wallet.title}
          </td>
          <td className="empty-state">
            {wallet.bitcoin}
          </td>
        </tr>



      );
    });
  }

  render() {
    return (
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
            {this.renderWallets()}

          <tr>
            <td>
              <span className="emptyTD" />
            </td>
            <td>
              <span className="emptyTD" />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ wallets }) {
  return { wallets };
}

export default connect(mapStateToProps, { fetchWallets })(WalletsList);

// <div key={wallet._id}>
//   <div>
//     <h4>{wallet.title}</h4>
//     <p>
//       Bitcoin: {wallet.bitcoin}
//     </p>
//     <p>
//       Ethereum: {wallet.ethereum}
//     </p>
//     <p>
//       Litecoin: {wallet.litecoin}
//     </p>
//     <p>
//       Date Added: {new Date(wallet.dateAdded).toLocaleDateString()}
//     </p>
//   </div>
// </div>
