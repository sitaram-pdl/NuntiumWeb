import React from "react";
import { Container, Row, Nav, Navbar, Form } from "react-bootstrap";



function Header() {
  return (
    <header>
      <Navbar  bg="black" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand >Nuntium</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            
            <i class="fa fa-sign-out" aria-hidden="true"></i>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;