import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWallets } from "../actions";
import { Field } from "redux-form";

class TransactionField extends Component {

  componentDidMount() {
    this.props.fetchWallets();
  }

  renderWallets() {



    return this.props.wallets.map(wallet => {
      return (
        <option key={wallet.title} name={wallet.title} value={wallet._id}>{wallet.title}</option>
      );

    });
  }

  render() {
    return (
      <Field name="wallet" component="select" className="wallet-select">
        <option></option>
        {this.renderWallets()}
      </Field>
    );
  }
}

function mapStateToProps({ wallets }) {
  return { wallets };
}

export default connect(mapStateToProps, { fetchWallets })(TransactionField);
