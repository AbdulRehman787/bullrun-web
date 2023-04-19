import React from 'react';

const MenuApi = [
  {
    title: 'IBM',
    lossPrice: '',
    price: '',
    img: '/image/loss.PNG'
  },
  {
    title: 'Gold',
    lossPrice: '11.5 0.76%',
    price: '12.54',
    img: '/image/profit.PNG'
  },
  {
    title: 'Tata',
    lossPrice: '8.005 0.76%',
    price: '11.54',
    img: '/image/profit.PNG'
  },
  {
    title: 'AAPL',
    lossPrice: '-0.005 0.76%',
    price: '15.40',
    img: '/image/loss.PNG'
  }
]

class StockApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      stockChartZValues: [],
      stockChartAValues: [],
      stockChartBValues: [],
    }
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    const API_KEY = 'AO6XM6FG8JPYR4LH';
    let StockSymbol = 'IBM';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    let stockChartZValuesFunction = [];

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
            stockChartZValuesFunction.push(data['Time Series (Daily)'][key]['3. low']);
            var price = stockChartYValuesFunction
            const updatedPrice = document.getElementById('updatedPrice');
            updatedPrice.innerHTML = price;
            const lossPrice = document.getElementById('lossPrice')
            lossPrice.innerHTML = stockChartZValuesFunction
            break
          }
          // console.log(stockChartXValuesFunction);
          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction,

          });


        }
      )
  }



  render() {
    return (
      <>
        <div className="row row-cols-1 row-cols-md-4 g-3 rowsdes">
          {MenuApi.map((curElem, index) => {
            return (
              <>
                <div className="col card-design" key={index}>
                  <div className="card card-conta">
                    <div className="card-body d-flex">
                      <h6 className="">{curElem.title}</h6>
                      <h6 className="card-titles" id='lossPrice'>{curElem.lossPrice}</h6>

                    </div>
                    <div className="card-body d-flex">
                      <p id='updatedPrice'>{curElem.price}</p>
                      <img className="card-titles" src={curElem.img} alt="" />
                    </div>

                  </div>
                </div>
              </>
            )
          })}


        </div>
      </>
    )
  }
}

export default StockApi;