import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css';

function Menu() {
    return ( <div>
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Members-Details</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>          
          </Nav>
          <Nav>
            <Nav.Link href="add" className='btn btn-outline-primary Button'> <i class="fa-solid fa-user"></i> Add User</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div> );
}

export default Menu;