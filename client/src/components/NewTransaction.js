import React, { Component } from "react";
import TransactionForm from "./TransactionForm";
import { reduxForm } from "redux-form";
import TransactionFormReview from "./TransactionFormReview";

class NewTransaction extends Component { 

  state = { showTransactionFormReview: false };
  renderContent() {
    if(this.state.showTransactionFormReview) {
      return <TransactionFormReview onCancel={() => this.setState({ showTransactionFormReview: false })}/>;
    }

    return <TransactionForm onTransactionSubmit={() => this.setState({ showTransactionFormReview: true })}/>;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: "transactionForm"
})(NewTransaction);
