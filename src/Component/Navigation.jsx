import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Png from '../Component/assets/Meubel House_Logos-05.png'

import '../Component/Navigation.css'

function Navigation() {
  return (


    
    <>
    <Navbar expand="lg" className="bg-body-tertiary px-3" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={Png} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <h1 className="fs-4 m-0">Singh Furniture</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5">
            <Nav.Link href="/" className="ms-5">Home</Nav.Link>
            <Nav.Link href="/about" className="ms-5">About</Nav.Link>
            <Nav.Link href="/shop" className="ms-5">Shop</Nav.Link>
            <Nav.Link href="/contact" className="ms-5">Contact</Nav.Link>
            <Nav.Link href="/blog" className="ms-5">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
     
      </Container>
    </Navbar>
    </>
  )
}

export default Navigation  