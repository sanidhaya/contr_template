import React from 'react'
import './propertyCards.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const PropertyCard = ({PropertyNo}) => {
  return (
    <div>
      <Card style={{width : '18rem'}}>
        <Card.Img variant='top' src={PropertyNo.image} />
        <Card.Body>
            <Card.Title><h4>{PropertyNo.Title}</h4></Card.Title>
            <Card.Text>type : {PropertyNo.type}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>{PropertyNo.address}</ListGroup.Item>
            <ListGroup.Item>{PropertyNo.price}</ListGroup.Item>
            <ListGroup.Item>about this property : {PropertyNo.Title}  {PropertyNo.address}</ListGroup.Item>
            {/*<ListGroup.Item>{PropertyNo.area}</ListGroup.Item>*/}
        </ListGroup>
        <Card.Body>
            <Card.Link href={`/properties/${PropertyNo.id}`}>More about the Property</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PropertyCard
