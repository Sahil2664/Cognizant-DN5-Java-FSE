import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Management Portal</h1>
      </header>
      <main className="content-area">
        <Home />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
