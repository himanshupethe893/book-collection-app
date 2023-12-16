import React from 'react';
import './index.css';

const BookCard = ({ book }) => {
  const {
    book_id,
    title,
    author_id,
    rating,
    rating_count,
    review_count,
    description,
    pages,
    date_of_publication,
    edition_language,
    price,
    online_stores,
  } = book;

  return (
    <li className='book-cards'>
      <table className='book-table'>
        <tbody>
          <tr>
            <td className='book-card-heading' colSpan='2'>{title}</td>
          </tr>
          <tr>
            <td className='book-values'>Author ID:</td>
            <td>{author_id}</td>
          </tr>
          <tr>
            <td className='book-values'>Rating:</td>
            <td>{rating}</td>
          </tr>
          <tr>
            <td className='book-values'>Rating Count:</td>
            <td>{rating_count}</td>
          </tr>
          <tr>
            <td className='book-values'>Review Count:</td>
            <td>{review_count}</td>
          </tr>
          <tr>
            <td className='book-values'>Description:</td>
            <td>{description}</td>
          </tr>
          <tr>
            <td className='book-values'>Pages:</td>
            <td>{pages}</td>
          </tr>
          <tr>
            <td className='book-values'>Publication Date:</td>
            <td>{date_of_publication}</td>
          </tr>
          <tr>
            <td className='book-values'>Edition Language:</td>
            <td>{edition_language}</td>
          </tr>
          <tr>
            <td className='book-values'>Price:</td>
            <td>{price}</td>
          </tr>
          <tr>
            <td className='book-values'>Online Stores:</td>
            <td>{online_stores}</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};

export default BookCard;
