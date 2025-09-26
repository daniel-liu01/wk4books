import { useState } from 'react';
import './App.css';
import Book from './Book.jsx';
import BooksData from './data/books.json';
import Modal from "./components/Modal.jsx";
import BookForm from './components/bookForm.jsx';

function App() {
  const [books, setBooks] = useState(BooksData);

  function remove(bookId) {
    setBooks(prevBooks => prevBooks.filter(book => book.isbn13 !== bookId));
  }

  return (
    <div className="app-container">
      <h1 className="header">Book Catalog</h1>

      <div className="books">
        {/* <div className="new">
          <button className="new-button" onClick={() => alert('New clicked!')}>
            New
          </button>
        </div> */}
        
        <Modal btnLabel="New" btnClassName={"new-button"}>
          <BookForm />
        </Modal>

        <div className="book-list">
          {books.map((book) => (
            <Book
              key={book.isbn13}
              price={book.price}
              image={book.image}
              url={book.url}
              onRemove={() => remove(book.isbn13)}
            />
          ))}
        </div>
      </div>

      <footer className="footer">
        <p className="footer-content">
          © Daniel Liu, 2025
        </p>
      </footer>
    </div>
  );
}

export default App;
