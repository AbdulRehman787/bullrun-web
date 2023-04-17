import React from 'react'

const TopNavbar = () => {
  return (
    <>
      <div className="topNavbar">
      <div className="leftnav">
      
      <h5>Dashborad</h5>
      <p>Pages/Dashborad</p>
      </div>
      <div className="rightnav">
      <div className="user-info">
      <div className="user-img"> Kh</div>
      <div className="user-det">
      <h6>Welcome</h6>
      <h2>Kevin</h2>
      </div>
      </div>
      <div className="more-info">
      <div><i className="fa-solid fa-question"></i></div>
      <div><i className="fa-solid fa-gear"></i></div>
      </div>
      </div>
      </div>
    </>
  )
}

export default TopNavbar
