import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { withRouter } from "react-router-dom";

const DeleteFormConfirm = ({ onCancel, formValues, deleteWallet, history, values }) => {

  return (
    <div className="addWallet">
      <h3 className="text-center">Are you sure?</h3>

      <button className="btn btn-cancel" onClick={onCancel}>Cancel</button>
      <button onClick={() => deleteWallet(formValues, history)} className="wallet-delete">
        Delete
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.deleteForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(DeleteFormConfirm));
