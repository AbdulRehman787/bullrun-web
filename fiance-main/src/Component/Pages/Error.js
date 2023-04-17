import React from 'react'
import Navbar from '../SideNavbar/Navbar'
import './style.css'

import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <>
      <Navbar />
      <div className="blog-det">
        <div className="text">
          <h2>404</h2>
          <h4>Page Not Found</h4>
          <p>The page you're looking for does not seem to exist</p>

          <Link to="/Pages/Home"><button className="tips-btn" >Go To Dashborad</button></Link>
        </div></div>
    </>
  )
}

export default Error
