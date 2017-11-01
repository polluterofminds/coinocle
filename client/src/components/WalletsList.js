import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWallets } from "../actions";
import axios from "axios";
import { HashLink as Link } from "react-router-hash-link";

class WalletsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btcprice: "",
      ltcprice: "",
      ethprice: "",
      wallets: []
    };
  }


  componentWillMount() {
    this.props.fetchWallets();
  }

  componentWillReceiveProps(newProps) {
    this.props.wallets.map(wallet => {
        const apiLink ="https://api.smartbit.com.au/v1/blockchain/address/";
        const key = wallet.publicKey;
        const url = apiLink + key;
        if(key) {
        axios
        .get(
          url
        )
        .then(res => {
          const newWallet = {
              id: wallet._id,
              title: wallet.title,
              bitcoin: wallet.bitcoin,
              key: wallet.publicKey,
              coins: res.data.address.total.received_int,
          }
          this.setState({ wallets:
            [...this.state.wallets, newWallet]
           });
        })
        .catch(error => {
          console.log(error);
        });
      } else {
        const newWallet = {
          id: wallet._id,
          title: wallet.title,
          bitcoin: wallet.bitcoin,
          key: wallet.publicKey
        }
        this.setState({ wallets:
          [...this.state.wallets, newWallet]
         });
      }
      });

  }

  componentDidMount(){
    this.props.fetchWallets();
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
    };

    this.getData();
    this.refresh = setInterval(() => this.getData(), 10000);

  }


  renderWallets() {
    return this.state.wallets.map(wallet => {
      const link = "/dashboard#" + wallet.id;
        const totalBitcoin = wallet.coins/100000000; // should be const because it never changes
        const totalAddressValue = totalBitcoin * this.state.btcprice;
        const bitcoinValue = wallet.bitcoin * this.state.btcprice;

          if(wallet.key){
            return (
              <tr key={wallet.id}>
                <td>
                  <Link className="wallet-link" to={link}>
                    {wallet.title}
                    <span className="glyphicon glyphicon-stats" />
                  </Link>
                </td>
                <td>
                  ${totalAddressValue.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}
                </td>
                <td>
                  <Link to="/wallets/delete">
                    <span className="glyphicon glyphicon-trash" />
                  </Link>
                </td>
              </tr>
          );
          } else {
            return (
              <tr key={wallet.id}>
                <td>
                  <Link className="wallet-link" to={link}>
                    {wallet.title}
                    <span className="glyphicon glyphicon-stats" />
                  </Link>
                </td>
                <td>
                  ${bitcoinValue.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}
                </td>
                <td>
                  <Link to="/wallets/delete">
                    <span className="glyphicon glyphicon-trash" />
                  </Link>
                </td>
              </tr>
        );
        }
      })
  }

  render() {

    return (
      <div className="wallet-table">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th className="text-center">
                <strong>Wallet Name</strong>
              </th>
              <th className="text-center">
                <strong>Current Value</strong>
              </th>
              <th>
                <span className="emptyTD" />
              </th>
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
