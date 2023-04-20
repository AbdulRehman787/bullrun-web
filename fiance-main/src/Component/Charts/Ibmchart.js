import React,{useEffect, useState} from 'react';
import Chart from 'react-apexcharts'
import axios from 'axios'
const Ibmchart =()=> {
  const [state, setState] = useState({
    options: {
     colors: ["#30b4ff" , "#FF9800"],
      chart: {
        id: "basic-bar",
      },
    },
    series: [
      {
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
useEffect(()=>{
  axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TSCO.LON&outputsize=compact&apikey=JOKHRI5PLTI53P21')
  .then(res=>setState(res.data))
  .catch(err=> console.log(err))
  console.log(state)
},[])
    return (
      <div className='ibm'>
      <Chart
      options={state.options}
      series={state.series}
      type="area"
      width="350" height="320"
    />
        <p className='tipsnam'>IBM Chart</p>
      </div>
    )
  }

export default Ibmchart;