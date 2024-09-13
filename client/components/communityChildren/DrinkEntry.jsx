import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Rating from 'react-rating';

function DrinkEntry({ drink }) {
  const { strIngredient1, strIngredient2, strIngredient3, strDrinkThumb, strDrink, strCategory, strGlass, ratings, comments } = drink;
  const threeMainIngredients = [strIngredient1, strIngredient2];
  if (strIngredient3) {
    threeMainIngredients.push(strIngredient3);
  }

  return (
    <Card
      style={{ width: '18rem' }}
      className='text-center'
      bg='dark'
      text='light'
      border='light'
    >
      <Card.Body>
        <Card.Img
          variant='top'
          src={strDrinkThumb}
          style={{ width: '160px', height: '160px' }}
        />
        <Card.Title>{strDrink}</Card.Title>
        <Card.Subtitle className='mb-2 text-secondary'>
          {strCategory}
        </Card.Subtitle>
        <Card.Subtitle className='mb-2 text-secondary'>
          {strGlass}
        </Card.Subtitle>
        <Card.Text>{threeMainIngredients.join(', ')}</Card.Text>

        {/* Display Ratings */}
        {ratings != null && (
          <div className='mb-2'>
            <h6>Rating:</h6>
            <Rating
              initialRating={ratings}
              readonly
              fractions={2}
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              style={{ color: '#ffd700' }}
            />
          </div>
        )}

        {/* Display Comments */}
        {comments && comments.length > 0 && (
          <div className='mt-2'>
            <h6>Comments:</h6>
            <ListGroup variant="flush">
              {comments.map((comment, index) => (
                <ListGroup.Item key={index}>{comment}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default DrinkEntry;
