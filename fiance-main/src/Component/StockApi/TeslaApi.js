import React from 'react';
import { Link } from 'react-router-dom'

import './style.css'


const date = new Date();
const todayDate = date.toLocaleDateString()


const RealData = [
  {
    name: 'Tesla',
    date: todayDate,
    highprice: '',
    lowprice: '',
    actualprice: '',
    price: '',
  }
]



class TeslaApi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      stockChartAValues: [],
      stockChartBValues: [],
      stockChartCValues: [],
    }
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    const API_KEY = 'JOKHRI5PLTI53P21';
    let StockSymbol = 'TSCO.LON';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    let stockChartAValuesFunction = [];
    let stockChartBValuesFunction = [];
    let stockChartCValuesFunction = [];
    fetch(API_Call)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function (data) {
          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
            stockChartAValuesFunction.push(data['Time Series (Daily)'][key]['3. low']);
            stockChartBValuesFunction.push(data['Time Series (Daily)'][key]['4. close']);
            stockChartCValuesFunction.push(data['Time Series (Daily)'][key]['2. high']);
            const highprice = document.getElementById('highprice7')
            highprice.innerHTML = stockChartYValuesFunction;

            const lowprice = document.getElementById('lowprice7');
            lowprice.innerHTML = stockChartAValuesFunction;

            const actualprice = document.getElementById('actualprice7');
            actualprice.innerHTML = stockChartBValuesFunction;
            const price = document.getElementById('price7')
            price.innerHTML = stockChartCValuesFunction
            break
          }
          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction,
            stockChartAValues: stockChartAValuesFunction,
            stockChartBValues: stockChartBValuesFunction,
            stockChartCValues: stockChartCValuesFunction,
          });
        }
      )
  }
  render() {
    return (
      <div className='ibm'>

        <table className="table table-fixed">
          <tbody>
            {RealData.map((curelem, index) => {
              return (
                <>
                  <tr key={index}>
                    <Link to='/MarketTrade/TESLA'>
                      <td className="tds1">{curelem.name}</td>
                    </Link>
                    <td className="tds2">{curelem.date}</td>
                    <td className="tds3" id="highprice7">{curelem.highprice}</td>
                    <td className="tds4" id="lowprice7">{curelem.lowprice}</td>
                    <td className="tds5" id="actualprice7">{curelem.actualprice}</td>
                    <td className="tds6" id="price7">{curelem.price}</td>
                    <td>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </td>
                    <td>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
        <fatchData RealData={RealData} />
      </div>

    )
  }
}

export default TeslaApi;