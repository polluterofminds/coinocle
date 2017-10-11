import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import TransactionField from "./TransactionField";
import { connect } from "react-redux";
import { fetchWallets } from "../actions";
import axios from "axios";
import * as actions from "../actions";

class TransactionForm extends Component {

  render() {

    return (
      <div>
        <div className="text-center">
          <h2 className="text-center">Update wallet details</h2>
          <p className="text-center">Note: Please enter the updated total values. Do not enter the recent amount bought or sold.</p>
          <form className="addwalletform"
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
                className="wallet-input"
              />
            </p>
            <label>Ethereum</label>
            <p>
              <Field
                name="ethereum"
                component="input"
                type="text"
                placeholder="Total Ethereum"
                className="wallet-input"
              />
            </p>
            <label>Litecoin</label>
            <p>
              <Field
                name="litecoin"
                component="input"
                type="text"
                placeholder="Total Litecoin"
                className="wallet-input"
              />
            </p>
            <p>
              <button type="submit" className="wallet-save">
                Add
              </button>
            </p>
          </form>
        </div>
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

function mapStateToProps({ wallets }) {
  return { wallets };
}

TransactionForm = reduxForm({
  validate,
  form: "transactionForm",
  destroyOnUnmount: false
})(TransactionForm);

export default connect(mapStateToProps, { fetchWallets })(TransactionForm);
