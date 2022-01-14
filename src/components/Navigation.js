import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    /* NAVIGATION COMPONENT */
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">PROJECT-Archeage</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>
            Home
          </Nav.Link>
          <Nav.Link to="/trade" as={Link}>
            Trade
          </Nav.Link>
          <Nav.Link to="/coordinate" as={Link}>
            Coordinate
          </Nav.Link>
          <Nav.Link to="/timer" as={Link}>
            Timer
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
