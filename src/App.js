import { useState } from 'react';
import './App.css';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  // Create a Book handler
  const createBook = (title) => {
    const updatedBooks = [...books, { id: Math.round(Math.random()*9999), title } ];
    setBooks(updatedBooks);
  }

  // Delete book By id
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById}/>
      <BookCreate onCreate={ createBook } />
    </div>
  );
}

export default App;
