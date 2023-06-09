import React from 'react';
import Plot from 'react-plotly.js';

class AppleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: []
    }
  }
  componentDidMount() {
    this.fetchStock();
  }
  fetchStock() {
    const pointerToThis = this;
    const API_KEY = 'JOKHRI5PLTI53P21';
    let StockSymbol = 'AAPL';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
          }
          // console.log(stockChartXValuesFunction);
          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction
          });
        }
      )
  }

  render() {
    return (
      <div className='ibm'>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'Bar',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 390, height: 400}}  
        />
        <p>AppleCharts</p>
      </div>
    )
  }
}

export default AppleChart;