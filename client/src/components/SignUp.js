import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./App.css";

class SignUp extends Component {

  render() {
    return (
      <div className="container">

<div className="col-sm-6 col-sm-offset-3">

    <h1><span className="fa fa-sign-in"></span> Signup</h1>


    <form action="/signup" method="post">
        <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" name="email" />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password" />
        </div>

        <button type="submit" className="btn btn-warning btn-lg">Signup</button>
    </form>

    <hr />

    <p>Already have an account? <a href="/login">Login</a></p>
    <p>Or go <a href="/">home</a>.</p>

</div>

</div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(SignUp);
