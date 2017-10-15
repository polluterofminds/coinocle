import React, { Component } from "react";
import { reduxForm } from "redux-form";
import TransactionField from "./TransactionField";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchWallets } from "../actions";

class DeleteForm extends Component {

  render() {

    return (
      <div className="addWallet">
        <div className="text-center">
          <h2 className="text-center">Delete Wallet</h2>
          <p className="text-center">Select the wallet you would like to delete.</p>
          <form className="addwalletform"
            onSubmit={this.props.handleSubmit(this.props.onTransactionSubmit)}
          >

            <p>
              <TransactionField />
            </p>
            <p>
              <Link to={"/wallets"}><button className="btn btn-cancel">Cancel</button></Link>
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

  return errors;
}

function mapStateToProps({ wallets }) {
  return { wallets };
}

DeleteForm = reduxForm({
  validate,
  form: "deleteForm",
  destroyOnUnmount: false
})(DeleteForm);

export default connect(mapStateToProps, { fetchWallets })(DeleteForm);
