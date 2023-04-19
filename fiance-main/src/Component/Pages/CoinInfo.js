import React from 'react';
import Navbar from '../SideNavbar/Navbar';
import './style.css';
import CoinCard from './CoinCard';
import IBMChart from './IbmCharts';
import MarketTrade from '../MarketTrade/MarketTrade';
const CoinInfo = ({filters}) => {
  console.log(filters)
  
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
        <div className="more-text contain">
        <h2 className='title'>Our Tips</h2>
        <table className='tips_table'>
          <thead>
            <th className='tip1'>Stock</th>
            {/*<th className='tip2'>Date</th> */}
            <th className='tip3'>Tips</th>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>


      </div>
    </>
  )
}

export default CoinInfo