import React from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>BloggerApp</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          ReactJS-HOL Exercise 13: Conditional Rendering & Lists
        </p>
      </header>

      <main className="grid-container">
        <BookDetails />
        <BlogDetails />
        <CourseDetails />
      </main>
    </div>
  );
}

export default App;
