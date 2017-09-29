import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";

const WalletReview = ({ onCancel, formValues, addWallet, history }) => {
  return (
    <div>
      <h4>Please confirm your wallet details</h4>
      <div>
        <label>Wallet Name</label>
        <div>{formValues.title}</div>
        <label>Total Bitcoin</label>
        <div>{formValues.bitcoin}</div>
        <label>Total Ethereum</label>
        <div>{formValues.ethereum}</div>
        <label>Total Litecoin</label>
        <div>{formValues.litecoin}</div>
      </div>
      <button className="btn btn-cancel" onClick={onCancel}>
        Edit
      </button>
      <button className="wallet-save right" onClick={() => addWallet(formValues, history)}>
        Add
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.walletForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(WalletReview));
