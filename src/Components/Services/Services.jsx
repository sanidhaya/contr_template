import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import services from '../../Services';
import ContactForm from '../ContactUs/ContactForm/ContactForm';
import './Services.css';

const Services = () => {
  const { id } = useParams();
  const matchedService = services.find(item => item.id == id);

  const serviceText = matchedService ? matchedService.text : "Service not found";
  const serviceImage = matchedService ? matchedService.image : null;

  return (
    <>
      <div className='service-heading'>
        Services {id}
      </div>
      <div>
        <Container fluid className='service-img-txt'>
          <Row>
            <Col xs={12} md={6} className='service-image-container'>
              <img src={serviceImage} alt='service_image' className='service-image' />
            </Col>
            <Col xs={12} md={6}>
              <div className='service-text'>
                {serviceText}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact-heading">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-form-container">
        <ContactForm />
      </div>
    </>
  );
}

export default Services;
