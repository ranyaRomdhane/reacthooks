import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-rating-stars-component';

function CardM({ movies }) {
  return (
    <div>
      <Card style={{ width: '18rem' , margin:'20px'}}>
      <Card.Img variant="top" src={movies.posterurl} />
      <Card.Body>
      <Card.Title>{movies.name}</Card.Title>
        <Button variant="primary">Whatch trailer</Button> 
        <div>
        <ReactStars
    count={5} 
    size={24}
     activeColor="#ffd700"
      edit={false}
       value={movies.rating}/>
        </div>
   
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardM

