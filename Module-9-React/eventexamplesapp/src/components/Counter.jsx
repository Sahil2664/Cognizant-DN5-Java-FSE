import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // Increment button should invoke multiple methods
  const handleIncrement = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    setMessage('Hello! The counter has been increased.');
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="card">
      <h2>Counter (Multi-method)</h2>
      <div className="flex-center" style={{ flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--primary)' }}>
          {count}
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-primary" onClick={handleIncrement}>
            Increment
          </button>
          <button className="btn btn-danger" onClick={handleDecrement} disabled={count === 0}>
            Decrement
          </button>
        </div>
      </div>
      {message && (
        <div className="message-box">
          {message}
        </div>
      )}
    </div>
  );
};

export default Counter;
