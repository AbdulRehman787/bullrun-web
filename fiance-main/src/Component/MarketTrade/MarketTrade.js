import React,{useState,useEffect} from 'react';
import IbmApi from '../StockApi/IbmApi';
import './style.css';
import DowApi from './../StockApi/DowApi';
import GoodApi from './../StockApi/GoodApi';
import MsftApi from './../StockApi/MsftApi'; 
import TeslaApi from './../StockApi/TeslaApi';
import axios from 'axios';
import Neo from '../StockApi/Neo'

const MarketTrade = () => {
 


  return (
    <>
    <div className="marketTrade">
    <IbmApi />
    <DowApi />
    <GoodApi />
    <MsftApi />
    <TeslaApi />
    <Neo />
    </div>
    </>
  )
}

export default MarketTrade
