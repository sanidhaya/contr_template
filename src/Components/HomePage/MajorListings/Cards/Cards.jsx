import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';

const Cards = ({ listing, text }) => {
  return (
    <div className="card-container">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={listing.image} className='card-image' />
        <Card.Body>
          <Card.Title>{listing.Title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button href={`/properties/${listing.id}`} variant='primary'>More Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
