import { useState } from 'react';
import './App.css';

import BookCreate from './components/BookCreate';

const App = () => {
  const [books, setBooks] = useState([]);

  // Create a Book handler
  const createBook = (title) => {
    const updatedBooks = [...books,
    { id: Math.round(Math.random() * 999) },
      title
    ];
    setBooks(updatedBooks);
  }

  return (
    <div className="App">
      <BookCreate onCreate={ createBook } />
    </div>
  );
}

export default App;
