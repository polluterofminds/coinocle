import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWallets } from "../actions";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
class IndividualWallets extends Component {

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

  render() {

    var portfolio = this.state.wallets;
    var coinTotal = portfolio.map(function(item) {
      return item.coins;
    });
    console.log(coinTotal);

    // return this.state.wallets.map(wallet => {
    //   var bitcoin = this.state.btcprice;
    //   var bitcoinConverted = wallet.coins/100000000;
    //   if(wallet.bitcoin){
    //     var bitcoinValue = wallet.bitcoin * bitcoin;
    //   } else {
    //     var bitcoinValue = bitcoinConverted * bitcoin;
    //   }
    //   if(wallet.bitcoin) {
    //     var bitcoinAmount = wallet.bitcoin;
    //   } else {
    //     var bitcoinAmount = bitcoinConverted;
    //   }

      //
      // const data = {
      //   labels: wallet.title,
      //   datasets: [
      //     {
      //       data: bitcoinValue,
      //       backgroundColor: ["#F2A900", "#3C3C3D", "#88CBF5"],
      //       hoverBackgroundColor: ["#00cc66", "#00cc66", "#00cc66"]
      //     }
      //   ]
      // }


      return (
        <div>
          <div className="chart">
            <div className="text-center top-charts">
              <h1 className="text-center">Total Portfolio Value</h1>
              <Doughnut />
            </div>
          </div>
        </div>
      );
// });
  }
}

function mapStateToProps({ wallets }) {
  return { wallets };
}

export default connect(mapStateToProps, { fetchWallets })(IndividualWallets);
