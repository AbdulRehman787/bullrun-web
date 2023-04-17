import React, { useEffect, useState } from 'react';
import Navbar from '../SideNavbar/Navbar';
import './style.css';
import CoinCard from './CoinCard';
import IBMChart from './IbmCharts';
import axios from 'axios'
import StockTips from './StockTips';
const CoinInfo = () => {
  const [data, setData] = useState([])
  const [filters, setFilters] = useState(data)
  useEffect(() => {
    axios.get('http://localhost:4500/register')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])

  const filterItem = (category) => {
    const updatedValue = data.filter((curelem) => {
      return curelem.stockname === category;
    })
    setFilters(updatedValue)
  }

  return (
    <>
      <Navbar />
      <div className="coin-details">
        <div className="top-coin">
          <h1 className='title'>IBM</h1>
          <p>Stock Sector: Information Technology</p>

        </div>
        <div className="row  row-cols-1 row-cols-md-2 g-4 row-design">
          <div className="col cols">
            <div className="card ">
              <div className="card-body">
                <CoinCard />
              </div>
            </div>
          </div>
          <div className="col col-des">
            <div className="card">
              <div className="card-body">
                <IBMChart />
              </div>
            </div>
          </div>
        </div>
        <button className='btns1' onClick={() => filterItem("DOW")}>DOW</button>
        <button className='btns1' onClick={() => filterItem("GOOD")}>GOOD</button>
        <button className='btns1' onClick={() => filterItem("IBM")}>IBM</button>
        <button className='btns1' onClick={() => filterItem("MSFT")}>MSFT</button>
        <button className='btns1' onClick={() => filterItem("NEO")}>NEO</button>
        <button className='btns1' onClick={() => filterItem("TESLA")}>TESLA</button>
        <StockTips filters={filters} />


      </div>
    </>
  )
}

export default CoinInfo