import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar expand="lg" className="header navbar-dark">
      <Container>

        <Navbar.Brand href="/" className="header-logo">
          <img
                alt=""
                src="/images/logo.png" 
                width="40"
                height="40"
                className="d-inline-block align-middle"
              />{' '}
              bisikleta para sa atenista
          </Navbar.Brand>

        {/* collapsing navbar */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/bikes' className='nav-link'>Bikes</Link>
            <Link to='/orders' className='nav-link'>Orders</Link>
            <Link to='/rentals' className='nav-link'>Rentals</Link>
            <Link to='/customers' className='nav-link'>Customers</Link>
            <Link to='/appointments' className='nav-link'>Appointments</Link>
            <Link to='/categories' className='nav-link'>Categories</Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;