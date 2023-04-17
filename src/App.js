import { useState } from 'react';
import './App.css';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  // Create a Book handler
  const createBook = (title) => {
    const updatedBooks = [...books, { id: Math.round(Math.random() * 9999), title }];
    setBooks(updatedBooks);
  }

  // Delete book By id
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })
    setBooks(updatedBooks);
  };

  // Edit book by id
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }

      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={ books } onDelete={ deleteBookById } onEdit={ editBookById } />
      <BookCreate onCreate={ createBook } />
    </div>
  );
}

export default App;
