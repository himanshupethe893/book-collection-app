import React from 'react';
import './index.css';

const AuthorCard = ({ author }) => {
  const {
    author_id,
    name,
    birth_place,
    birth_date,
    genre,
    followers_count,
    about,
  } = author;

  return (
    <li className='author-cards'>
      <table className='author-table'>
        <tbody>
          <tr>
            <td className='author-card-heading' colSpan='2'>{name}</td>
          </tr>
          <tr>
            <td className='author-values'>Author ID:</td>
            <td>{author_id}</td>
          </tr>
          <tr>
            <td className='author-values'>Birth Place:</td>
            <td>{birth_place}</td>
          </tr>
          <tr>
            <td className='author-values'>Birth Date:</td>
            <td>{birth_date}</td>
          </tr>
          <tr>
            <td className='author-values'>Genre:</td>
            <td>{genre}</td>
          </tr>
          <tr>
            <td className='author-values'>Followers Count:</td>
            <td>{followers_count}</td>
          </tr>
          <tr>
            <td className='author-values'>About:</td>
            <td>{about}</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};

export default AuthorCard;
