import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWallets } from "../actions";
import axios from "axios";

import { HashLink as Link } from 'react-router-hash-link';

class WalletsList extends Component {

  constructor () {
      super();
      this.state = {
          btcprice: '',
          ltcprice: '',
          ethprice: ''
      };
  }
  componentWillMount () {
      axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
          .then(res => {
              this.setState({ btcprice: res.data.BTC.USD });
              this.setState({ ethprice: res.data.ETH.USD });
              this.setState({ ltcprice: res.data.LTC.USD });
          })

          .catch(error => {
              console.log(error)
          })
  }

  componentDidMount() {
    this.props.fetchWallets();
  }

  renderWallets() {

    return this.props.wallets.map(wallet => {
      var bitcoin = this.state.btcprice;
      var ethereum = this.state.ethprice;
      var litecoin = this.state.ltcprice;
      var bitcoinValue = wallet.bitcoin * bitcoin;
      var ethereumValue = wallet.ethereum * ethereum;
      var litecoinValue = wallet.litecoin * litecoin;

      var totalValue = bitcoinValue + ethereumValue + litecoinValue;
      var link = "/dashboard#"+ wallet._id;
      console.log(wallet._id);



      return (
        <tr key={wallet.title}>
          <td>
            {wallet.title}<Link to={link}><span className="glyphicon glyphicon-stats"></span></Link>
          </td>
          <td>
            ${totalValue.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}
          </td>
          <td>
            <Link to={wallet._id}><span className="glyphicon glyphicon-trash"></span></Link>
          </td>
        </tr>

      );
    });
  }

  render() {

    return (
      <div className="wallet-table">
        <table className="table table-bordered table-striped table-hover">
          <thead>
          <tr>
            <th className="text-center"><strong>Wallet Name</strong></th>
            <th className="text-center"><strong>Current Value</strong></th>
            <th><span className="emptyTD" /></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <Link to={"/wallets/new"} className="addAWallet">
                Add a wallet
              </Link>
            </td>
            <td className="empty-state">$0.00</td>
            <td>
              <span className="emptyTD" />
            </td>
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
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ wallets }, { auth }) {
  return { wallets };
}

export default connect(mapStateToProps, { fetchWallets })(WalletsList);
