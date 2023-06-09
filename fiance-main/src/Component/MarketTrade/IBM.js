import React, { useEffect, useState } from 'react'
import Navbar from '../SideNavbar/Navbar'
import CoinCard from '../Pages/CoinCard'
import IbmChart from '../StockApi/IbmChart'
import axios from 'axios'
import StockTip from './StockTip'
import IbmCoinCard from './IbmCoinCard'
const IBM = () => {
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
      <h1 className='title'>IBM</h1>
      <p>Stock Sector: Information Technology</p>
    </div>
    <div className="row  row-cols-1 row-cols-md-2 g-4 row-design">
      <div className="col cols">
        <div className="card ">
          <div className="card-body">
            <IbmCoinCard />
          </div>
        </div>
      </div>
      <div className="col col-des">
        <div className="card">
          <div className="card-body">
            <IbmChart/>
          </div>
        </div>
      </div>
    </div>

    <div>
    <button className='btns1' onClick={()=> filtersItem("IBM")}>IBM</button>
    </div>
    <StockTip filters={filters} />
</div>
    </>
  )
}

export default IBM