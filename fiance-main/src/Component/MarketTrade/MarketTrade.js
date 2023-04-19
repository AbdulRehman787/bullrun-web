import React, { useEffect, useState } from 'react';
import IbmApi from '../StockApi/IbmApi';
import './style.css';
import DowApi from './../StockApi/DowApi';
import GoodApi from './../StockApi/GoodApi';
import MsftApi from './../StockApi/MsftApi';
import TeslaApi from './../StockApi/TeslaApi';
import Neo from '../StockApi/Neo';
import axios from 'axios';
import CoinInfo from '../Pages/CoinInfo';

const MarketTrade = () => {
  const [data, setData] = useState([])
  const [filters , setFilters] = useState(data)
  
  useEffect(() => {
    axios.get('http://localhost:4500/register')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  })
  const filterItem = (category) => {
    const updatedValue = data.filter((curelem) => {
      return curelem.stockname === category;
    })
    setFilters(updatedValue)
  }
  return (
    <>
      <div className="marketTrade" >
        <IbmApi onClick={()=>filterItem("IBM")} />
        <DowApi onClick={()=>filterItem("DOW")} />
        <GoodApi onClick={()=>filterItem("GOOD")} />
        <MsftApi onClick={()=>filterItem("MSFT")} />
        <Neo onClick={()=>filterItem("NEO")} />
        <TeslaApi onClick={()=>filterItem("TESLA")} />
      </div>

      <div className='coincont'>
      <CoinInfo filters={filters} />
      </div>
    </>
  )
}

export default MarketTrade;
