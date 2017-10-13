import React, { Component } from "react";
import { connect } from "react-redux";
import NewTransaction from "./NewTransaction";
import * as actions from "../actions";
import { Link } from "react-router-dom";
import logo from "../assets/logoWhite.png";
import "./App.css";


class AddTransactionButton extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
          </div>
        );
      default:

        if (this.props.auth.credits > 0) {
        return (
          <div>
          <div className="addTransactionButton">
            <Link to={"/transactions/new"} type="button" className="text-center plus-sign">
              +
            </Link>
          </div>
          </div>
        );
      } else {
        return (
          <div>
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth, form }) {
  return { auth, form };
}

export default connect(mapStateToProps, actions)(AddTransactionButton);
