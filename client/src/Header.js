import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments"
import logo from "./logoWhite.png";
import "./App.css";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/auth/google">Sign In</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        );
      default:
        return (
          <ul className="nav navbar-nav navbar-right">
            <li>
              < a href="/billing">Billing</a></li>
            <li>
              <a href="/contact">Help</a>
            </li>
            <li>
              <a href="/api/logout">Sign Out</a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="glyphicon glyphicon-option-vertical" />
              </button>
              <Link
                to={this.props.auth ? "/dashboard" : "/"}
                className="navbar-brand"
              >
                <img src={logo} alt="Coinocle" />
              </Link>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <a href="/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
              {this.renderContent()}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
