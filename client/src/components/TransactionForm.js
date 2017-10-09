import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import TransactionField from "./TransactionField";

class TransactionForm extends Component {
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <label>Select Wallet</label>
          <p><TransactionField /></p>
          <label>Bitcoin</label>
          <p><Field name="bitcoin" component="input" type="text" placeholder="Total Bitcoin"/></p>
          <label>Ethereum</label>
          <p><Field name="ethereum" component="input" type="text" placeholder="Total Ethereum"/></p>
          <label>Litecoin</label>
          <p><Field name="litecoin" component="input" type="text" placeholder="Total Litecoin"/></p>
          <p><button type="submit" className="wallet-save">Add</button></p>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "transactionForm"
})(TransactionForm);
