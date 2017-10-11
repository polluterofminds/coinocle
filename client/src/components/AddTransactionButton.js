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
            <a type="button" className="text-center plus-sign" data-toggle="modal" data-target="#myModal">
              +
            </a>
          </div>


          <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <p type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></p>
                  <h3 className="modal-title text-center" id="myModalLabel">New Transaction</h3>
                </div>
                <div className="modal-body">
                <NewTransaction />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <p><button type="submit" className="wallet-save">Save</button></p>
                </div>
              </div>
            </div>
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
