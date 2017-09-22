import React, { Component } from 'react';
import { connect } from "react-redux";
import Payments from './Payments';

class Billing extends Component {
  render() {
    const planName = 'Yearly';
    const amountDue = '$99.99';

    return (
      <div className="billing-main">
        <div className="billingBackground">
          <h1 className="text-center billing-header">Billing</h1>
          <h2 className="plan-name text-center">Your Plan: {planName}</h2>
          <h2 className="amount-owed text-center">Amount Due: {amountDue}</h2>
          <p className="text-center">
            <Payments />
          </p>
        </div>
        <div className="row billing-additional">
          <div className="col-md-6 billing-cards">
            <h2 className="text-center">Billing History</h2>
            <p />
          </div>
          <div className="col-md-6 billing-cards">
            <h2 className="text-center">Switch to a Yearly Plan</h2>
            <p />
          </div>
        </div>
      </div>
    );
  }
}

export default Billing;
