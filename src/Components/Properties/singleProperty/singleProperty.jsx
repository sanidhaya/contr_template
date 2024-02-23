import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';
import Property from '../../../Properties';
import image2 from '../../../images/istockphoto-478821794-170667a.webp';
import CardSlider from './CardSlider/CardSlider';
import Slideshow from './Collage/Slideshow';
import MapComponent from './Map_singl/Map_single';
import './singleProperty.css';

const SingleProperty = () => {
  const { id } = useParams();

  const propert = Property.find((item) => item.id == id);

  const Basicdata = () => {
    return (
      <Container>
        <Row className='row-ele'>
          <Col>{propertyDetails.price}</Col>
          <Col>{propertyDetails.location}</Col>
        </Row>
        <Row className='row-ele'>
          <Col>{propertyDetails.address}</Col>
        </Row>
      </Container>
    );
  };

  const propertyDetails = {
    title: `Title ${id}`,
    address: propert.address,
    location: propert.location,
    price: propert.price,
    images: [propert.image,image2], // Change 'image' to 'images' and pass an array
  };

  return (
    <>
      <div>
        <h1 className='text-2xl font-bold'>{propertyDetails.title}</h1>
      </div>
      <div>
        <Slideshow images={propertyDetails.images} />
      </div>
      <div className='mt-4'>
        <Basicdata />
      </div>
      <div className='card-slider'>
        <CardSlider />
      </div>
      <div className='amenities-section'>
        <h2>Amenities</h2>
        <div className='amenities-box'>
          {propert.Ameneties.map((amenity, index) => (
            <div className='amenity-box' key={index}>
              {amenity}
            </div>
          ))}
        </div>
      </div>
      <div className='map-component'>
        <MapComponent />
      </div>
      <div className='text-center font-bold p-10'>
        For any other queries please contact <Link to='/ContactUs'>Contact Us </Link>
      </div>
    </>
  );
};

export default SingleProperty;
