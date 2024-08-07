import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom"
import image2 from '../../Site ki bakchodi/150 room hotel/WhatsApp Image 2024-07-08 at 11.32.28 AM (1).jpeg'
import image1 from '../../Site ki bakchodi/15000 sq ft commercial space/WhatsApp Image 2024-07-08 at 11.30.45 AM.jpeg'
import image3 from '../../Site ki bakchodi/2000 sqft shop/WhatsApp Image 2024-07-08 at 11.33.10 AM.jpeg'
import './HomePage.css'
import LittleAbout from "./LittleAbout/LittleAbout"
import MajorListings from "./MajorListings/MajorListings"
import Collage from "./Slideshow/Carousal"

const slides = [
  {
      url: image1
  },
  {
      url: image2
  },
  {
      url: image3
  },  
];

const LoadMore = () => {
  return(
    <div className=" flex items-center justify-center">
      <Button variant="primary" href="properties" >properties</Button>
    </div>
  )
}

const Header = () => {
  return (
    <div className='header_company'>
      <Container >
        <div className='md:w-full'>
          <Row md={4} className="toprow">
            <Col md={4}><Link to="tel:8800353579"> <PhoneIcon fontSize="large"/></Link> : Call us </Col>
            <Col md={5}><Link to="tel:sanidhaya08sharma11@gmail.com"><EmailIcon fontSize="large"/> : Mail us </Link></Col>
            <Col md={3}><Link to="https://wa.me/1234567890"><WhatsAppIcon fontSize='large'/></Link> : Whatsapp us </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}




const HomePage = () => {
  return (
    <div className="homepage">
      {/*Modal*/}
      {/*Modal*/}
        {/*-------------Header-------------------*/}
        <Header className="header" />
        {/*-------------Header-------------------*/}
        {/*------------slideshow-----------------*/}
        <div className="collage-slides">
          <Collage slides={slides}/>
        </div>
        {/*------------slideshow-----------------*/}
        {/*-----------major listings-------------*/}
        <div className="majorlistings">
          <MajorListings />
        </div>
        {/*-----------major listings-------------*/}
        {/*-----------load more button-----------*/}
        <div className="LoadmoreProperties">
        <LoadMore />
        </div>
        {/*-----------load more button-----------*/}
        {/*--basic bits likebest in class sols---*/}
        <div className="little-about">
          <LittleAbout />
        </div>
        {/*--basic bits likebest in class sols---*/}
        {/*-----------testimonials---------------*/}
    </div>
  )
}

export default HomePage
