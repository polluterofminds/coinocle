import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";
import "./App.css";


class AddTransactionButton extends Component {

  render() {
    return (
      <div>
      <div className="addTransactionButton">
        <Link to={"/transactions/new"} type="button" className="text-center plus-sign">
          +
        </Link>
      </div>
      </div>
    );
  }
}

function mapStateToProps({ auth, form }) {
  return { auth, form };
}

export default connect(mapStateToProps, actions)(AddTransactionButton);
