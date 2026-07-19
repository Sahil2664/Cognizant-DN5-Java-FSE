import React from 'react';
import './App.css';
import Counter from './components/Counter';
import WelcomeButton from './components/WelcomeButton';
import SyntheticEventButton from './components/SyntheticEventButton';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Event Examples App</h1>
        <p>ReactJS-HOL Exercise 11: Event Handling</p>
      </header>
      
      <main className="components-grid">
        <Counter />
        <WelcomeButton />
        <SyntheticEventButton />
        <CurrencyConverter />
      </main>
    </div>
  );
}

export default App;
