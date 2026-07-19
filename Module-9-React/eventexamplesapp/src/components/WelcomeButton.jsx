import React, { useState } from 'react';

const WelcomeButton = () => {
  const [message, setMessage] = useState('');

  // Function that takes an argument
  const handleWelcome = (greeting) => {
    setMessage(`${greeting}! It's great to have you here.`);
    
    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  return (
    <div className="card">
      <h2>Passing Arguments</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        Click the button to invoke a function passing "Welcome" as an argument.
      </p>
      
      <div style={{ marginTop: '1rem' }}>
        <button 
          className="btn btn-secondary" 
          onClick={() => handleWelcome('Welcome')}
        >
          Say Welcome
        </button>
      </div>

      {message && (
        <div className="message-box">
          {message}
        </div>
      )}
    </div>
  );
};

export default WelcomeButton;
