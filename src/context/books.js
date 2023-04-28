import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext()

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  // Fetching all the books on initial render
  const fetchBooks = useCallback(async () => {
    const res = await axios.get('http://localhost:3001/books')
    setBooks(res.data);
  }, []);

  // Create a Book handler
  const createBook = async (title) => {
    const res = await axios.post(`http://localhost:3001/books`, {
      title
    })

    const updatedBooks = [...books, res.data]
    setBooks(updatedBooks);
  }

  // Delete book By id
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })

    setBooks(updatedBooks);
  };

  // Edit book by id
  const editBookById = async(id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    });

    const updatedBooks = books.map((book) => {
      if(book.id === id) {
        return {...books, ...res.data}
      }

      return book;
    });
    setBooks(updatedBooks);
  };

  const valuesToShare = {
    books,
    fetchBooks,
    createBook,
    deleteBookById,
    editBookById
  }

  return <BooksContext.Provider value = { valuesToShare }>
    { children }
  </BooksContext.Provider>
}

export { Provider };
export default BooksContext;