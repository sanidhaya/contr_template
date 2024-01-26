import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './singleProperty.css'; // Import the generated Tailwind CSS file
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import CardSlider from './CardSlider/CardSlider';
import Slider from './Collage/slider';
import MapComponent from './Map_singl/Map_single';

const SingleProperty = () => {
  const { id } = useParams();

  const Basicdata = () => {
    return(
      <Container>
        <Row className='row-ele'>
          <Col>{propertyDetails.price}</Col>
          <Col>{propertyDetails.location}</Col>
        </Row>
        <Row className='row-ele'>
          <Col>{propertyDetails.address}</Col>
        </Row>
      </Container>
    )
  }

  const propertyDetails = {
    title: `Title ${id}`,
    address: '123 Main St',
    location: 'City, State',
    price: '$500,000',
  };


  return (
    
  <>
      <div>
        <h1 className="text-2xl font-bold">{propertyDetails.title}</h1>
      </div>
      <div className="mt-4">
        <Slider />
      </div>
      <div className="mt-4">
      <Basicdata />
      </div>
      <div className='card-slider'>
        <CardSlider />
      </div>
      <div className='map-component'>
        <MapComponent />
      </div>
      <div className='text-center font-bold p-10'>
      For any other queries please contact <Link to="/ContactUs">Contact Us </Link>
      </div>
      </>
  );
};

export default SingleProperty;

{/*<div className="container mx-auto p-4">
  </div>*/}