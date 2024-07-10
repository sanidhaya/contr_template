import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import image1 from '../../../images/HD-wallpaper-city-street-buildings-traffic-road-asphalt.jpg';
import './LittleAbout.css';

const LittleAbout = () => {
  return (
    <div>
    <Container fluid className='littleabout-container'>
      <Row>
        {/* Image Container */}
        <Col xs={12} md={6} className='littleaboutimage-container'>
          <img src={image1} alt='image' className='littleaboutimage' />
        </Col>

        {/* Text Container */}
        <Col xs={12} md={6} className='littleabout'>
          <h3 className='littleaboutheading'>Little about</h3>
          <p className='littleabouttext'>
          Welcome to Heera Properties, your trusted partner in construction brokerage services.
          With 20+ years of experience in the industry, we specialize in connecting clients
          with the best construction professionals and projects.
          <br/>
          <br />
          Our mission is to streamline the construction process by providing expert advice,
          facilitating communication between clients and contractors, and ensuring successful
          project outcomes.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default LittleAbout;
