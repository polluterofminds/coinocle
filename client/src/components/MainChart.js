import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWallets } from "../actions";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
class TestChart extends Component {

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
      var bitcoin = this.state.btcprice;
      var ethereum = this.state.ethprice;
      var litecoin = this.state.ltcprice;
      var bitcoinConverted = wallet.coins/100000000;
      if(wallet.bitcoin){
        var bitcoinValue = wallet.bitcoin * bitcoin;
      } else {
        var bitcoinValue = bitcoinConverted * bitcoin;
      }
      if(wallet.bitcoin) {
        var bitcoinAmount = wallet.bitcoin;
      } else {
        var bitcoinAmount = bitcoinConverted;
      }

      return (
        <div className="wallet-table charts-table col-md-6">
          <h3 id={wallet.id} className="text-center">{wallet.title}</h3>
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>
                  <strong>Coin Type</strong>
                </th>
                <th>
                  <strong>Total Coins</strong>
                </th>
                <th>
                  <strong>Total Value</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bitcoin</td>
                <td>{bitcoinAmount}</td>
                <td>
                  ${bitcoinValue
                    .toFixed(2)
                    .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });
  }

  render() {
    var portfolio = this.state.wallets;
    console.log(this.state.btcprice);

    var bitcoinAmount = portfolio.map(function(item) {
      if(item.bitcoin) {
        return item.bitcoin;
      } else {
        return item.coins/100000000;
      }
    });

    // var total = portfolio.map(function(item) {
    //   return bitcoinAmount * this.state.btcprice;
    // });

    var walletName = portfolio.map(function(item) {
      return item.title;
    });

    // Sum the array's values from left to right
    var totalBit = bitcoinAmount.reduce(function(prev, curr) {
      return prev + curr;
    }, 0);


    const data = {
      labels: walletName,
      datasets: [
        {
          data: bitcoinAmount,
          backgroundColor: ["#F2A900", "#3C3C3D", "#88CBF5"],
          hoverBackgroundColor: ["#00cc66", "#00cc66", "#00cc66"]
        }
      ]
    };

    return (
      <div>
        <div className="chart">
          <div className="text-center top-charts">
            <h1 className="text-center">Total Portfolio Value</h1>
            <Doughnut data={data} />
          </div>
        </div>
        <div className="row">
        {this.renderWallets()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ wallets }) {
  return { wallets };
}

export default connect(mapStateToProps, { fetchWallets })(TestChart);
