import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/auth";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="Pay $5 for 5 survey credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn btn-info">Donate Here!</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
