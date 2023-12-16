
import React from 'react';

const BookCard = ({goodreads}) => {
  return (
    <div>
      <h2>{goodreads.title}</h2>
      <p>Author: {goodreads.author}</p>
    </div>
  );
};

export default BookCard;
