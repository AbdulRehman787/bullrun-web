import React from 'react'
import Navbar from './Component/SideNavbar/Navbar';
import Card from './Component/Cardsec/Card';
import Chart from './Component/Charts/Chart';
import MarketTrade from './Component/MarketTrade/MarketTrade';
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Card />
        <Chart />
        <MarketTrade />
      </div>
      <Routes>
        <Route path="/home" element={<home />} /> 
      </Routes>
    </>
  )
}

export default Home;
