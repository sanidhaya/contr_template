import React from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import services from '../../Services';
import logo from '../../assets/asset-images/componylogo/companylogo3.jpg'; // Import your company logo
import './Navbar.css';


const Navba = () => {

  return (
    <>
      <Navbar collapseOnSelect expand="sm" variant='dark' bg="black" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="/" className='companylogopic'>
            <img
              src={logo}
              height="auto"
              style={{ maxHeight: '30px', marginRight: '10px' }}
              className="d-inline-block align-top"
              alt="Company Logo"
            />
            Heera Properties
          </Navbar.Brand>
          <Navbar.Toggle className='nabar-toggle' aria-controls='responsive-navbar-nav' color='black'/>
          <Navbar.Collapse id='responsive-navbar-nav' color='black'>
          <Nav className="me-auto nav">
            <Nav.Link href="/" className='link'>Home</Nav.Link>
            <Nav.Link href="/About" className='link'>Features</Nav.Link>
            <Nav.Link href="/properties" className='link'>Projects</Nav.Link>
            <Nav.Link href="/ContactUs" className='link'>Contact us</Nav.Link>
            <Nav.Link className='link'>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navba
