import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navba = () => {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Company Name</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/About">Features</Nav.Link>
        <Nav.Link href="/properties">Pricing</Nav.Link>
        <Nav.Link href="/ContactUs">Contact us</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </>
  )
}

export default Navba
