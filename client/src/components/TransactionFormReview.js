import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";

const TransactionFormReview = ({ onCancel, formValues, updateWallet, history }) => {
  return (
    <div className="addWallet">
      <h3 className="text-center">Please confirm transaction</h3>
      <div className="text-center review">

        <div>
          <label>Bitcoin</label>
          <div>{formValues.bitcoin}</div>
        </div>
        <div>
          <label>Ethereum</label>
          <div>{formValues.ethereum}</div>
        </div>
        <div>
          <label>Litecoin</label>
          <div>{formValues.litecoin}</div>
        </div>
      </div>
      <button className="cancel" onClick={onCancel}>Cancel</button>
      <button onClick={() => updateWallet(formValues, history)} className="wallet-save">
        Save
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.transactionForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(TransactionFormReview));
