import React from 'react'

const BookShow = ({ book, onDelete }) => {
  const handleClick = () => {
    return onDelete(book.id)
  };

  return (
    <div className='book-show'>
      { book.title }
      <div className="actions">
        <button className="edit" onClick={ handleClick }>
          Edit
        </button>
        <button className="delete" onClick={ handleClick }>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow