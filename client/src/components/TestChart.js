import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWallets } from "../actions";
import axios from "axios";
import {Line} from 'react-chartjs-2';

class Historical extends Component {
  constructor() {
    super();
    this.state = {
      todayPrice: "",
      oneDay: "",
      twoDay: "",
      threeDay: "",
      fourDay: "",
      fiveDay: "",
      sixDay: "",
      values: [{
        x: "",
        y: ""
      },]
    };
  }

  componentWillMount() {
    let todayDate = Math.floor(Date.now() / 1000);
    let oneDayAgo = todayDate - 24 * 3600;
    let twoDayAgo = oneDayAgo - 24 * 3600;
    let threeDayAgo = twoDayAgo - 24 * 3600;
    let fourDayAgo = threeDayAgo - 24 * 3600;
    let fiveDayAgo = fourDayAgo - 24 * 3600;
    let sixDayAgo = fiveDayAgo - 24 * 3600;

    let apiLink =
      "https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD,EUR&ts=";
    this.getData = () => {
      axios
        .get(apiLink + todayDate)
        .then(res => {
          this.setState({ todayPrice: res.data.BTC.USD });
        })
        .catch(error => {
          console.log(error);
        });
      axios
        .get(apiLink + oneDayAgo)
        .then(res => {
          this.setState({ oneDay: res.data.BTC.USD });
        })
        .catch(error => {
          console.log(error);
        });
      axios
        .get(apiLink + twoDayAgo)
        .then(res => {
          this.setState({ twoDay: res.data.BTC.USD });
        })
        .catch(error => {
          console.log(error);
        });
      axios
        .get(apiLink + threeDayAgo)
        .then(res => {
          this.setState({ threeDay: res.data.BTC.USD });
        })
        .catch(error => {
          console.log(error);
        });
      axios
        .get(apiLink + fourDayAgo)
        .then(res => {
          this.setState({ fourDay: res.data.BTC.USD });
        })
        .catch(error => {
          console.log(error);
        });
      axios
        .get(apiLink + fiveDayAgo)
        .then(res => {
          this.setState({ fiveDay: res.data.BTC.USD });
        })
        .catch(error => {
          console.log(error);
        });
      axios
        .get(apiLink + sixDayAgo)
        .then(res => {
          this.setState({ sixDay: res.data.BTC.USD });
        })
        .catch(error => {
          console.log(error);
        });
        axios
          .get("https://blockchain.info/charts/market-price?format=json")
          .then(res => {
            this.setState({ values: res.data.values });
          })
          .catch(error => {
            console.log(error);
          });
    };

    console.log(this.state.values);
  }

  componentDidMount() {
    this.getData();
    this.refresh = setInterval(() => this.getData(), 100000);
    this.props.fetchWallets();
  }

  render() {
    const data = {
      labels: [
        "Six Days Ago",
        "Five Days Ago",
        "Four Days Ago",
        "Three Days Ago",
        "Two Days Ago",
        "One Day Ago",
        "Today"
      ],
      datasets: [
        {
          label: 'Bitcoin 7-Day Performance',
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#F2A900",
          borderColor: "#F2A900",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#F2A900",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#F2A900",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [
            this.state.sixDay,
            this.state.fiveDay,
            this.state.fourDay,
            this.state.threeDay,
            this.state.twoDay,
            this.state.oneDay,
            this.state.todayPrice
          ]
        }
      ]
    };


    return (
      <div className="linechart">
        <Line data={data} />
      </div>
    );
  }
}

function mapStateToProps({ wallets }) {
  return { wallets };
}

export default connect(mapStateToProps, { fetchWallets })(Historical);
