import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './Cards.css'

const Cards = ({Listing,Listing_Text}) => {
  return (
    <div style={{paddingTop:'15px'}}>
      <Card style={{width : '18rem'}}>
        <Card.Img variant='top' src= {Listing.image} className='card-image'/>
        <Card.Body>
            <Card.Title>{Listing.Title}</Card.Title>
            <Card.Text>{Listing_Text}</Card.Text>
            <Button variant='primary'>More Details</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cards
