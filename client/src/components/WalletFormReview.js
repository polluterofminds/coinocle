import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";


const WalletReview = ({ onCancel, formValues, addWallet, history }) => {

  return (
    <div className="addWallet">
      <h3 className="text-center">Please confirm your wallet details</h3>
      <div className="text-center review">
        <label>Wallet Name</label>
        <div><strong>{formValues.title}</strong></div>
        <label>Public Key</label>
        <div><strong>{formValues.publicKey}</strong></div>
        <label>Total Bitcoin</label>
        <div><strong>{formValues.bitcoin}</strong></div>
      </div>
      <button className="cancel" onClick={onCancel}>
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
