import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import WalletField from "./WalletField";
import "./App.css";

class WalletForm extends Component {
  renderFields() {
    return (
      <div>
        <Field type="text" name="title" className="wallet-input" placeholder="Wallet name" component={WalletField} />
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="addWallet">
          <h1 className="text-center">Add a wallet & starting balance</h1>
          <div className="text-center">
            <p>Enter wallet name</p>
            <form
              onSubmit={this.props.handleSubmit(values => console.log(values))}
            >
              {this.renderFields()}
              <p>
                <button className="wallet-save" type="submit">
                  Save
                </button>
              </p>
            </form>
          </div>
        </div>
        <div className="addTransactionButton">
          <a href="#" className="text-center plus-sign">
            +
          </a>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "walletForm"
})(WalletForm);
