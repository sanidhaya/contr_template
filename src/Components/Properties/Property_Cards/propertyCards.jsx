import React from 'react'
import './propertyCards.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const PropertyCard = ({PropertyNo}) => {
  return (
    <div className="property-card-container">
      <Card className="property-card">
        <Card.Img variant="top" src={PropertyNo.image} className="property-card-img" />
        <Card.Body>
          <Card.Title className="property-card-title">
            <h4>{PropertyNo.Title}</h4>
          </Card.Title>
          <Card.Text className="property-card-text">Type: {PropertyNo.type}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="property-list-item">{PropertyNo.address}</ListGroup.Item>
          <ListGroup.Item className="property-list-item">{PropertyNo.price}</ListGroup.Item>
          <ListGroup.Item className="property-list-item">
            About this property: {PropertyNo.Title} {PropertyNo.address}
          </ListGroup.Item>
          {/* Uncomment the next line if you want to display the area */}
          {/* <ListGroup.Item className="property-list-item">{PropertyNo.area}</ListGroup.Item> */}
        </ListGroup>
        <Card.Body>
          <Card.Link href={`/properties/${PropertyNo.id}`} className="property-card-link">
            More about the Property
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PropertyCard
