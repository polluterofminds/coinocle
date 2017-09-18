import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {

    return (
      <StripeCheckout
        name="Coinocle"
        description="One Month Subscription"
        amount={999}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
      <button className="btn payment-button">Pay Now</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
