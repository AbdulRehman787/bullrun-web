import React from 'react'
import Navbar from '../SideNavbar/Navbar';
import Card from '../Cardsec/Card';
import Chart from '../Charts/Chart'
import MarketTrade from './../MarketTrade/MarketTrade';
const Home = () => {
  return (
    <>

      <Navbar />
      <Card />
      <Chart />
      <MarketTrade />
    </>
  )
}

export default Home;
