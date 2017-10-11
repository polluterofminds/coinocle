import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchWallets } from "../actions";

const TransactionFormReview = ({ onCancel, formValues }) => {
  return (
    <div>
      <h5>Please confirm transaction</h5>
      <div>
        <div>
          <label>Wallet Name</label>
          <div>{formValues.wallet}</div>
        </div>
        <div>
          <label>Bitcoin Amount</label>
          <div>{formValues.bitcoin}</div>
        </div>
        <div>
          <label>Ethereum Amount</label>
          <div>{formValues.ethereum}</div>
        </div>
        <div>
          <label>Litecoin Amount</label>
          <div>{formValues.litecoin}</div>
        </div>
      </div>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={updateWallet} className="wallet-save">
        Save
      </button>
    </div>
  );
};

function updateWallet(id, formValues) {
  console.log("You submitted!");
  axios.put("/api/wallets/:wallet_id", formValues)
    .catch(err => {
      console.log(err);
    });
  // Wallet.findOneAndUpdate({ _id: formValues.wallet }, { bitcoin: formValues.bitcoin })
}

function mapStateToProps(state) {
  return {
    formValues: state.form.transactionForm.values
  };
}

export default connect(mapStateToProps, { fetchWallets })(
  TransactionFormReview
);
