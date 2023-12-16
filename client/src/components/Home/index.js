import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import NavBar from '../Navbar';
import Footer from '../Footer';
import BookCard from '../BookCard';
import AuthorCard from '../AuthorCard';
import 'index.css';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [bookList, setBookList] = useState([]);
  const [authorList, setAuthorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBookList = async () => {
    setIsLoading(true);

    try {
      const bookResponse = await fetch('/books');
      const bookData = await bookResponse.json();

      if (bookResponse.ok) {
        setBookList(bookData);
      } else {
        console.error('Error fetching books:', bookData);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }

    setIsLoading(false);
  };

  const getAuthorList = async () => {
    setIsLoading(true);

    try {
      const authorResponse = await fetch('/author');
      const authorData = await authorResponse.json();

      if (authorResponse.ok) {
        setAuthorList(authorData);
      } else {
        console.error('Error fetching authors:', authorData);
      }
    } catch (error) {
      console.error('Error fetching authors:', error);
    }

    setIsLoading(false);
  };

  const onChangeCity = (event) => {
    setUserInput(event.target.value);
  };

  useEffect(() => {
    // Add any additional initialization logic or data fetching here
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      <NavBar />
      <div className='home-bg-container'>
        <div className='input-btn-container'>
          <input
            id='userInput'
            className='input-user'
            type='search'
            value={userInput}
            onChange={onChangeCity}
          />
          <button className='search-btn' type='button' onClick={getBookList}>
            Search Books
          </button>
          <button className='search-btn' type='button' onClick={getAuthorList}>
            Search Authors
          </button>
        </div>
        {isLoading ? (
          <TailSpin />
        ) : (
          <>
            <div className='book-card-container'>
              <h2>Books</h2>
              <ul className='unorder-list-container'>
                {bookList.map((book) => (
                  <BookCard key={book.book_id} book={book} />
                ))}
              </ul>
            </div>
            <div className='author-card-container'>
              <h2>Authors</h2>
              <ul className='unorder-list-container'>
                {authorList.map((author) => (
                  <AuthorCard key={author.author_id} author={author} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
