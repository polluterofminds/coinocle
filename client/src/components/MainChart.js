import React from 'react';
import {Doughnut} from 'react-chartjs-2';

var litecoinValue = 200;
var bitcoinValue = 500;
var ethereumValue = 200;

const data = {
	labels: [
		'Litecoin',
		'Bitcoin',
		'Ethereum'
	],
	datasets: [{
		data: [litecoinValue, bitcoinValue, ethereumValue],
		backgroundColor: [
		'#88CBF5',
		'#F2A900',
		'#EBF0F1'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default React.createClass({
  displayName: 'DoughnutExample',

  render() {
    return (
      <div>
        <Doughnut data={data} />
      </div>
    );
  }
});
