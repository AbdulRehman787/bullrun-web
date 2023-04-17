import React from 'react'
import './style.css'
import NavApi from './NavbarApi'
import TopNavbar from './TopNavbar'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="sideNavbar">
          <div className="top">

            <img src="/image/logo.png" className='logo' alt="" />
            <h2>Bull Run</h2>
          </div>
          <div className="nav-body">

            <ul>
              {NavApi.map((curElem, index) => {
                return (
                  <>
                    <li key={index} onClick={() => { window.location.pathname = curElem.link }}>
                      <div className='sidenavbarli'>
                        <div>{curElem.icon}</div>
                        <div className='text-para'>{curElem.name}</div>
                      </div>
                    </li>
                  </>
                )
              })}
            </ul>
          </div>
        </div>
        <TopNavbar />
      </div>
    </>
  )
}

export default Navbar
