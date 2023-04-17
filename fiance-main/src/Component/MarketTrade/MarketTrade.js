import React,{useState,useEffect} from 'react';
import IbmApi from '../StockApi/IbmApi';
import './style.css';
import DowApi from './../StockApi/DowApi';
import GoodApi from './../StockApi/GoodApi';
import MsftApi from './../StockApi/MsftApi'; 
import TeslaApi from './../StockApi/TeslaApi';
import axios from 'axios';

const MarketTrade = () => {
  const [values , setValues]= useState([])
  const [filters , setFilters ]= useState(values)
  useEffect(()=>{
    axios.get('http://localhost:4500/register')
    .then(res => setValues(res.data))
    .catch(err=>console.log(err))
  })

  const filterItem =(category)=>{
    const updatedValue =  values.filter((curelem)=>{
      return curelem.stockname === category
    })
    setFilters(updatedValue)
  }


  return (
    <>
    <div className="marketTrade">
    <IbmApi   onClick={()=> filterItem("IBM")}   />
    <DowApi   onClick={()=> filterItem("DOW")}  />
    <GoodApi  onClick={()=> filterItem("GOOD")}  />
    <MsftApi  onClick={()=> filterItem("MSFT")}  />
    <TeslaApi onClick={()=> filterItem("TESLA")}  />
    </div>
    </>
  )
}

export default MarketTrade
