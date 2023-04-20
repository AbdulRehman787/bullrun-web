import React from 'react';

class TeslaCoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      stockChartAValues: [],
      stockChartBValues: [],
      stockChartCValues: [],
      stockChartDValues: [],
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
    let stockChartDValuesFunction = [];
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
            stockChartAValuesFunction.push(data['Time Series (Daily)'][key]['2. high']);
            stockChartBValuesFunction.push(data['Time Series (Daily)'][key]['3. low']);
            stockChartCValuesFunction.push(data['Time Series (Daily)'][key]['4. close']);
            stockChartDValuesFunction.push(data['Time Series (Daily)'][key]["5. volume"]);

            const price = document.getElementById('price')
            price.innerHTML = stockChartYValuesFunction;

            const mainprice = document.getElementById('mainprice')
            mainprice.innerHTML = stockChartYValuesFunction

            const highprice = document.getElementById('highprice');
            highprice.innerHTML = stockChartAValuesFunction;
            console.log(stockChartAValuesFunction)


            const lowprice = document.getElementById('lowprice');
            lowprice.innerHTML = stockChartBValuesFunction;
            console.log(stockChartBValuesFunction)


            const closeprice = document.getElementById('closeprice')
            closeprice.innerHTML = stockChartCValuesFunction
            console.log(stockChartCValuesFunction)


            const volumeprice = document.getElementById('volumeprice')
            volumeprice.innerHTML = stockChartDValuesFunction
            console.log(stockChartDValuesFunction)
            break
          }

          // console.log(stockChartXValuesFunction);
          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction,
            stockChartAValues: stockChartAValuesFunction,
            stockChartBValues: stockChartBValuesFunction,
            stockChartCValues: stockChartCValuesFunction,
            stockChartDValues: stockChartDValuesFunction,
          });
        }
      )
  }

  render() {
    return (
      <div className='ibm'>
        <div className="card-group sq">
          <div className="card card-des">
          <h1 className='title' id='mainprice'></h1>
            <h2 id='profitprice'>+10.23 (0.23%)</h2>
            <h3 className='d-fle design'>Price <p className='dynnamicdata' id='price'></p> </h3><hr />
            <h3 className='d-fle design'>Week <p className='dynnamicdata' id='price'>US$268.49 - US$272.91</p> </h3><hr />
            <h3 className='d-fle design'>52 Week <p className='dynnamicdata' id='price'>US$236.1 - US$272.9</p> </h3><hr />
            <h3 className='d-fle design'>High Price <p className='dynnamicdata' id='highprice'></p> </h3><hr />
            <h3 className='d-fle design'>Low  Price<p className='dynnamicdata' id='lowprice'></p> </h3><hr />
            <h3 className='d-fle design'>Close Price <p className='dynnamicdata' id='closeprice'></p></h3><hr />
            <h3 className='d-fle design'>Volume <p className='dynnamicdata' >3856345</p> </h3><hr />
            <h3 className='d-fle design'>Ceo <p className='dynnamicdata' >Jack Cohen</p> </h3>
          </div>
        </div>



      </div>

    )
  }
}

export default TeslaCoin;