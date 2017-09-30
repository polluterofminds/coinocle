import React, { Component } from "react";
import { connect } from "react-redux";


class TotalValue extends Component {

  constructor() {
    super();
    this.state = {
      Value: ""
    };
  }

  componentDidMount() {
    fetch("https://blockchain.info/ticker")
    .then(results => {
      return results.json();
    }).then(data => {
      var value = USD.last;
        return (
          <div>
            {value}
          </div>
        )
      })
      // this.setState( {Value: USD} );
      console.log("state", this.state.USD);

  }

  render() {
    return (
      <div>
        {this.state.USD}
      </div>
    );
  }
}
function mapStateToProps({ auth, form }) {
  return { auth, form };
}

export default connect(mapStateToProps)(TotalValue);
