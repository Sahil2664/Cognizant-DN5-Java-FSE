import React, { useState } from 'react';

const mockBlogs = [
  { id: 'blg1', title: 'Mastering React Conditional Rendering', date: 'Oct 10, 2023' },
  { id: 'blg2', title: 'Why Vite is Awesome', date: 'Oct 15, 2023' },
  { id: 'blg3', title: 'CSS Glassmorphism in 2024', date: 'Oct 20, 2023' }
];

const BlogDetails = () => {
  const [showData, setShowData] = useState(true);

  return (
    <div className="section-container">
      <h2>
        Blog Details
        <button className="btn btn-toggle" onClick={() => setShowData(!showData)}>
          Toggle Data
        </button>
      </h2>
      
      {/* Method 2: Using the Ternary Operator (? :) */}
      {showData ? (
        <div className="list-container">
          {mockBlogs.map(blog => (
            <div key={blog.id} className="item-card" style={{ borderLeftColor: 'var(--secondary)' }}>
              <h3 className="item-title">{blog.title}</h3>
              <p className="item-meta">Published: {blog.date}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No blogs to display.</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
