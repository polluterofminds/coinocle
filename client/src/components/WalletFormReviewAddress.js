import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import axios from "axios";
import { withRouter } from "react-router-dom";

const WalletReviewAddress = ({ onCancel, formValues, addWallet, history }) => {

  var data;
  var apiLink = "https://api.smartbit.com.au/v1/blockchain/address/";
  var key = formValues.publicKey;
  var satoshi;
  axios
    .get(
      apiLink + key
    )
    .then(res => {
      this.data = res.data.address.total.received_int;
    })
    .catch(error => {
      console.log(error);
    });

console.log(this.data);

var totalBit = (data / 100000000);
// console.log(totalBit);

  return (
    <div className="addWallet">
      <h3 className="text-center">Please confirm your wallet details</h3>
      <div className="text-center review">
        <label>Wallet Name</label>
        <div><strong>{formValues.title}</strong></div>
        <label>Public Key</label>
        <div><strong>{formValues.publicKey}</strong></div>
        <label>Total Bitcoin</label>
        <div><strong>{formValues.bitcoin = (this.data/100000000)}</strong></div>
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

export default connect(mapStateToProps, actions)(withRouter(WalletReviewAddress));
