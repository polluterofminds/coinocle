import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import TransactionField from "./TransactionField";
import { connect } from "react-redux";
import { fetchWallets } from "../actions";
import axios from "axios";
import * as actions from "../actions";

class TransactionForm extends Component {

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
      var bitcoinValue = wallet.bitcoin;
      var ethereumValue = wallet.ethereum;
      var litecoinValue = wallet.litecoin;

      var totalValue = bitcoinValue + ethereumValue + litecoinValue;




      return (
        console.log(wallet)
      );
    });
  }

  render() {
    {this.renderWallets()}

    return (
      <div>
        <form
          // onSubmit={fireAway}
          onSubmit={this.props.handleSubmit(this.props.onTransactionSubmit)}
        >
          <label>Select Wallet</label>
          <p>
            <TransactionField />
          </p>
          <label>Bitcoin</label>
          <p>
            <Field
              name="bitcoin"
              component="input"
              type="text"
              placeholder="Total Bitcoin"
            />
          </p>
          <label>Ethereum</label>
          <p>
            <Field
              name="ethereum"
              component="input"
              type="text"
              placeholder="Total Ethereum"
            />
          </p>
          <label>Litecoin</label>
          <p>
            <Field
              name="litecoin"
              component="input"
              type="text"
              placeholder="Total Litecoin"
            />
          </p>
          <p>
            <button type="submit" className="wallet-save">
              Add
            </button>
          </p>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.wallet) {
    errors.wallet = "You must select a wallet";
  }
  if (values.bitcoin != null && isNaN(values.bitcoin)) {
    errors.bitcoin = "Please enter numbers only";
  }

  if (values.ethereum != null && isNaN(values.ethereum)) {
    errors.ethereum = "Please enter numbers only";
  }

  if (values.litecoin != null && isNaN(values.litecoin)) {
    errors.litecoin = "Please enter numbers only";
  }

  return errors;
}

function fireAway(values, { fetchWallets }, done) {
  return this.wallet.findByIdAndUpdate(this.wallet._id, { bitcoin: values.bitcoin });
  done();
}

function mapStateToProps({ wallets }) {
  return { wallets };
}

TransactionForm = reduxForm({
  validate,
  form: "transactionForm",
  destroyOnUnmount: false
})(TransactionForm);

export default connect(mapStateToProps, { fetchWallets })(TransactionForm);
