import React from 'react'
import './style.css'
import ReChart from './ReChart'
import IbmChart from './../StockApi/IbmChart';

const Chart = () => {
  return (
    <div>
      <div className="charts-con">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
          <IbmChart />
            </div>
          </div>
          <div className="col sas">
            <div className="card">
              <div className="card-body">
                <h2><i className="fa-solid fa-clock"></i> Watch List</h2>
                <ReChart />
              </div>
            </div>
          </div>
          <div className="col sas">
            <div className="card">

              <div className="card-body">
                <h2><i className="fa-solid fa-eye"></i> My PotFolio</h2>
                <ReChart />
              </div>
            </div>
          </div>

        </div>
      </div></div>


  )
}

export default Chart
