import React, { useEffect, useState } from 'react'
import Navbar from '../SideNavbar/Navbar'
import axios from 'axios'
import StockTip from './StockTip'
import TeslaCoin from './TeslaCoin'
import TeslaChart from './../StockApi/TeslaChart';

const TESLA = () => {
  
   const [values,setValues] =useState([])
    const [filters,setFilters] = useState(values)
    useEffect(()=>{
        axios.get('http://localhost:4500/register')
        .then(res=> setValues(res.data))
        .catch(err=>console.log(err))
    },[])
    const filtersItem =(category)=>{
        const updatedValue = values.filter((curelem)=>{
            return curelem.stockname === category
        })
        setFilters(updatedValue)  
    }
  return (
    <>
    <Navbar />
    <div className="coin-details">
    <div className="top-coin">
      <h1 className='title'>TESLA</h1>
      <p>Stock Sector: Information Technology</p>
    </div>
    <div className="row  row-cols-1 row-cols-md-2 g-4 row-design">
      <div className="col cols">
        <div className="card ">
          <div className="card-body">
            <TeslaCoin />
          </div>
        </div>
      </div>
      <div className="col col-des">
        <div className="card">
          <div className="card-body">
            <TeslaChart />
          </div>
        </div>
      </div>
    </div>

    
    <div>
    
    <button className='btns1' onClick={()=> filtersItem("TESLA")}>CLICK THIS </button>
    <StockTip filters={filters} />
    </div>
</div>
   </>
  )
}

export default TESLA