import React from 'react'
import image1 from '../../../assets/images/slides/gettyimages-1232572541-612x612.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './LittleAbout.css'

const LittleAbout = () => {
  return (
      <Container fluid>
        <Row>
            <Col><img src={image1} alt='image' className='littleaboutimage'/></Col>
            <Col className='littleabout'>
              <h3 className='littleaboutheading'>Little about</h3>
              <p className='littleabouttext'>here you get to know a little about the company. Some text such as LoadMore</p>
            </Col>
        </Row>
      </Container>
  )
}

export default LittleAbout
