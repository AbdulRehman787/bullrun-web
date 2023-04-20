import React,{useEffect, useState} from 'react';
import Chart from 'react-apexcharts'
import axios from 'axios'

const IbmChart =()=> {
  const [state, setState] = useState({
    options: {
     colors: ["#30b4ff" , "#FF9800"],
      chart: {
        id: "basic-bar",
      },
    },
    series: [
      {
        stockChartXValues: [],
        stockChartYValues: []
      },
    ],
 
  });

  useEffect(()=>{
        fetchStock()
  },[])
 
  const fetchStock=()=> {
    const pointerToThis = this;
    const API_KEY = 'JOKHRI5PLTI53P21';
    let StockSymbol = 'Ibm';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    axios.get(API_Call)
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

    return (
      <div className='ibm'>
      <Chart
      options={state.options}
      series={state.series}
        type="area"
      width="750"
      
    />
        <p className='tipsnam'>IBM Chart</p>
      </div>
    )
  }

export default IbmChart;