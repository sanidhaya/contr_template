import React from 'react';
import image1 from '../../../images/HD-wallpaper-city-street-buildings-traffic-road-asphalt.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LittleAbout.css';

const LittleAbout = () => {
  return (
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
            Here you get to know a little about the company. Some text such as LoadMore
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LittleAbout;
