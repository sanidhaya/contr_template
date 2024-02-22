import React from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import services from '../../Services';
import logo from '../../assets/asset-images/componylogo/companylogo3.jpg'; // Import your company logo


const Navba = () => {
  return (
    <>
      <Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="auto"
              style={{ maxHeight: '30px', marginRight: '10px' }}
              className="d-inline-block align-top"
              alt="Company Logo"
            />
            Heera Properties
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">Features</Nav.Link>
            <Nav.Link href="/properties">Pricing</Nav.Link>
            <Nav.Link href="/ContactUs">Contact us</Nav.Link>
            <Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant='' id='dropdown-basic'>
                  Services
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {
                    services.map(item => (
                      <Dropdown.Item key={item.id}><Link to={`services/${item.id}`}>{item.service}</Link></Dropdown.Item>
                    ))
                  }
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navba
