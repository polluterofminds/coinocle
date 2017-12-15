import React, { Component } from "react";
import axios from 'axios';

class Currencies extends Component {

  constructor() {
    super();
    this.state = {
      bitcoin: true,
      ethereum: true,
      bitcoinCash: false,
      litecoin: false,
      iota: false,
      ripple: false,
      dash: false,
      nem: false,
      monero: false,
      bitcoinGold: false,
      cardano: false,
      ethereumClassic: false,
      eos: false,
      stellarLumens: false,
      neo: false,
      bitconnect: false,
      populous: false,
      waves: false,
      omiseGo: false,
      lisk: false
    };
  }

  renderSelect(){
    if(this.state.bitcoin === true) {
      return(<h1>Bitcoin</h1>);
    } else if(this.state.ethereum === true) {
      return(<h1>Ethereum</h1>)
    } else {
      return (<h1>Heyo</h1>)
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.renderSelect()}
        </div>
      </div>
    );
  }
}

export default Currencies;
