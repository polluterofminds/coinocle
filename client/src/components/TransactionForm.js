import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import TransactionField from "./TransactionField";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchWallets } from "../actions";

const renderField = field => (
  <div className="input-row">
    <input {...field.input} type="text" />
    {field.meta.touched &&
    field.meta.error && (
      <span className="errorMessage">{field.meta.error}</span>
    )}
  </div>
);

class TransactionForm extends Component {
  render() {
    return (
      <div className="addWallet">
        <div className="text-center">
          <h2 className="text-center">Add Transactions</h2>
          <p className="text-center">
            Enter total coins purchased or sold. Use a negative number for
            sales.
          </p>
          <form
            className="addwalletform"
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
                component={renderField}
                type="text"
                className="wallet-input"
                placeholder="Total Bitcoin"
              />
            </p>
            <label>Ethereum</label>
            <p>
              <Field
                name="ethereum"
                component={renderField}
                type="text"
                placeholder="Total Ethereum"
                className="wallet-input"
              />
            </p>
            <label>Litecoin</label>
            <p>
              <Field
                name="litecoin"
                component={renderField}
                type="text"
                placeholder="Total Litecoin"
                className="wallet-input"
              />
            </p>
            <p>
              <Link to={"/wallets"}>
                <button className="cancel">Cancel</button>
              </Link>
              <button type="submit" className="wallet-save">
                Next
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
