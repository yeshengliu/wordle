import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="/">Wordle</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/game/normal">Normal</Nav.Link>
        <Nav.Link href="/game/hard">Hard</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;