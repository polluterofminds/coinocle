import React, { Component } from 'react';
import { Doughnut } from "react-chartjs-2";
import DoughnutExample from "./MainChart";
import { Link } from "react-router-dom";
import './App.css';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <DoughnutExample />
      </div>
    );
  }
}

export default Dashboard;
