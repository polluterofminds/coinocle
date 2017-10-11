import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWallets } from "../actions";
import { reduxForm, Field } from "redux-form";
import axios from "axios";
import { Link } from "react-router-dom";

class TransactionField extends Component {

  componentDidMount() {
    this.props.fetchWallets();
  }

  renderWallets() {

    const { meta } = this.props;

    return this.props.wallets.map(wallet => {
      return (
        <option key={wallet._id} name={wallet._id} value={wallet._id}>{wallet.title}</option>
      );
    });
  }

  render() {

    return (
      <Field name="wallet" component="select">
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
