import React from 'react';
import Posts from './Posts';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Latest Blog Posts</h1>
      </header>
      <main className="content-area">
        <Posts />
      </main>
    </div>
  );
}

export default App;
