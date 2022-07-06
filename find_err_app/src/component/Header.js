import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
      <Navbar className= 'myNav' variant="dark" >
        <Container >
          <Navbar.Brand href="#" className='logo'><h1>ErrFree</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Cards">Cards</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;
