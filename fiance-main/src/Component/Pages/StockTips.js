import React from 'react'
import './style.css'
const StockTips = ({ filters }) => {

  return (
    <>
      <div className="more-text contain">
        <h2 className='title'>Our Tips</h2>
        <table className='tips_table'>
          <thead>
            <th className='tip1'>Stock</th>
            <th className='tip2'>Date</th>
            <th className='tip3'>Tips</th>
          </thead>
          <tbody>
            {filters.map((curelem, index) => {
              return <>
                <tr className='tipsrow' key={curelem.id}>
                  <td className='tips1text'>{curelem.stockname}</td>
                  <td className='tips2text'>{curelem.date}</td>
                  <td className='tips3text'>{curelem.tips}</td>
                </tr>
              </>
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default StockTips