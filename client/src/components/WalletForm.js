import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import WalletField from "./WalletField";
import "./App.css";

class WalletForm extends Component {

  renderFields() {

    return (
      <div>
        <Field
          label="Wallet Name"
          type="text"
          name="title"
          className="wallet-input"
          component={WalletField}
          placeholder="Wallet name" />
          <Field
            label="Total Bitcoin"
            type="number"
            name="bitcoin"
            className="wallet-input"
            placeholder="Total bitcoin"
            component={WalletField} />
          <Field
            label="Total Ethereum"
            type="number"
            name="ethereum"
            className="wallet-input"
            placeholder="total ethereum"
            component={WalletField} />
            <Field
              label="Total Litecoin"
              type="number"
              name="litecoin"
              className="wallet-input"
              placeholder="Total litecoin"
              component={WalletField} />
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="addWallet">
          <h1 className="text-center">Add a wallet & starting balance</h1>
          <div className="text-center">
            <form className="addwalletform"
              onSubmit={this.props.handleSubmit(this.props.onWalletSubmit)}
            >
              {this.renderFields()}
              <p>
              <Link to={"/wallets"}><button className="cancel">Cancel</button></Link>
                <button className="wallet-save" type="submit">
                  Next
                </button>
              </p>
            </form>
          </div>
        </div>
        <div className="addTransactionButton">
          <a href="/transactions/new" className="text-center plus-sign">
            +
          </a>
        </div>
      </div>
    );
  }
}

function validate(values){
  const errors = {};

  if (!values.title){
    errors.title = "You must provide a wallet name";
  }

  if (values.bitcoin != null && isNaN(values.bitcoin)){
    errors.bitcoin = "Please enter numbers only";
  }

  if (values.ethereum != null && isNaN(values.ethereum)){
    errors.ethereum = "Please enter numbers only";
  }

  if (values.litecoin != null && isNaN(values.litecoin)){
    errors.litecoin = "Please enter numbers only";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "walletForm",
  destroyOnUnmount: false
})(WalletForm);
