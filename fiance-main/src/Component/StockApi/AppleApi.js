import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'
const date= new Date();
const todayDate = date.toLocaleDateString();

const RealData=[
    {
        name: "APL",
        date: todayDate
    }
]
class AppleApi extends React.Component {

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
    let StockSymbol = 'AApl';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    let stockChartAValuesFunction = [];
    let stockChartBValuesFunction = [];
    let stockChartCValuesFunction = [];
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
            stockChartCValuesFunction.push(data['Time Series (Daily)'][key]['2. high']);
            stockChartAValuesFunction.push(data['Time Series (Daily)'][key]['3. low']);
            stockChartBValuesFunction.push(data['Time Series (Daily)'][key]['4. close']);
            const highprice = document.getElementById('highprice1')
            highprice.innerHTML = stockChartYValuesFunction;

            const lowprice = document.getElementById('lowprice1');
            lowprice.innerHTML = stockChartAValuesFunction;

            const actualprice = document.getElementById('actualprice1');
            actualprice.innerHTML = stockChartBValuesFunction;
            const price1 = document.getElementById('price1')
            price1.innerHTML = stockChartCValuesFunction;
            (stockChartYValuesFunction)
            (stockChartAValuesFunction)
            (stockChartBValuesFunction)
            (stockChartCValuesFunction)
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
      <tbody>
      <tr>
      {RealData.map((curelem,index)=>{
        return(
            <>
            <tr key={index}>
            <Link to='/Pages/PortFolio'>
            <td className='tds1'>{curelem.name}</td>
            </Link> 
            <td className='tds2'>{curelem.date}</td>
            <td className='tds3' id="highprice1"></td>
            <td className='tds4' id="lowprice1"></td>
            <td className='tds5' id="actualprice1"></td>
            <td className='tds6' id="price1"></td>
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
      </tr>
      </tbody> 

 
    </div>
    )
  }
}
export default AppleApi;