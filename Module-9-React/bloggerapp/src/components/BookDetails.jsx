import React, { useState } from 'react';

const mockBooks = [
  { id: 'bk1', title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
  { id: 'bk2', title: 'Clean Code', author: 'Robert C. Martin' },
  { id: 'bk3', title: 'Refactoring', author: 'Martin Fowler' }
];

const BookDetails = () => {
  const [showData, setShowData] = useState(true);

  // Method 1: Using standard if/else statements
  let content;
  
  if (showData) {
    content = (
      <div className="list-container">
        {mockBooks.map(book => (
          <div key={book.id} className="item-card">
            <h3 className="item-title">{book.title}</h3>
            <p className="item-meta">Author: {book.author}</p>
          </div>
        ))}
      </div>
    );
  } else {
    content = (
      <div className="empty-state">
        <p>No books available right now.</p>
      </div>
    );
  }

  return (
    <div className="section-container">
      <h2>
        Book Details
        <button className="btn btn-toggle" onClick={() => setShowData(!showData)}>
          Toggle Data
        </button>
      </h2>
      {content}
    </div>
  );
};

export default BookDetails;
