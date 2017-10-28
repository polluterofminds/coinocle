// import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import WalletField from "./WalletField";
import "./App.css";

class WalletFormAddress extends Component {


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
            label="Public Address"
            type="text"
            name="publicKey"
            className="wallet-input"
            placeholder="public key"
            component={WalletField} />
            <div className="hide-this"><Field
              label="Total Bitcoin"
              type="text"
              name="bitcoin"
              className="hide-this"
              placeholder="bitcoin"
              component={WalletField} /></div>

      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="addWallet">
          <h1 className="text-center">Enter a wallet name and address</h1>
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

  if (!values.publicKey){
    errors.publicKey = "You must provide a public address";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "walletForm",
  destroyOnUnmount: false
})(WalletFormAddress);
