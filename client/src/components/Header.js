import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logoWhite.png";
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

            </li>
            <li>
              <a
                href="http://www.coinocle.com/contact.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
        );
      default:

        if (this.props.auth.credits > 0) {
        return (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/billing">Billing</a>
            </li>
            <li>
              <a href="/contact">Help</a>
            </li>
            <li>
              <a href="/api/logout">Sign Out</a>
            </li>

            <li><a>Credits: {this.props.auth.credits}</a></li>
          </ul>
        );
      } else {
        return (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/billing">Billing</a>
            </li>
            <li>
              <a href="/contact">Help</a>
            </li>
            <li>
              <a href="/api/logout">Sign Out</a>
            </li>
            <li>
              <a href="/billing"><button className="payment-warning"><span className="glyphicon glyphicon-info-sign"></span>Payment Due</button></a>
            </li>

          </ul>
        );
      }
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
                to={this.props.auth ? "/wallets" : "/"}
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
