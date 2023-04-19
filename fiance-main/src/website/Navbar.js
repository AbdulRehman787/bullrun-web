import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Navbars = () => {
  return (
   <>
   <Navbar className='navbar-func' fixed="top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src="/image/logo.png" width= "60px" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-5 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='nav-text active' href="#">Home</Nav.Link>
            <Nav.Link className='nav-text' href="#">About</Nav.Link>
            <Nav.Link className='nav-text' href="#">Pricing Plan</Nav.Link>
            <Nav.Link className='nav-text' href="#">Investing Fundamentals</Nav.Link>
            <Nav.Link className='nav-text' href="#">Contact</Nav.Link> 
            <Nav.Link className='nav-text' href="#">Blog</Nav.Link> 
         </Nav>
              <Link to="./../Component/Pages/MainHome"><button className='btns'>Client User</button></Link>
      </Navbar.Collapse>
      </Container>

    </Navbar>
   </>
  )
}

export default Navbars