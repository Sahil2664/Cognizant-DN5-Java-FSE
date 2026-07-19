import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);
  
  // Exchange rate: 1 Euro = ~90 INR
  const EURO_TO_INR = 90;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const parsedAmount = parseFloat(amount);
    
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }

    // Convert Indian Rupees to Euro
    const inrToEuro = (parsedAmount / EURO_TO_INR).toFixed(2);
    // Convert Euro to Rupees (as per instructions saying "conversion of euro to rupees" too)
    const euroToInr = (parsedAmount * EURO_TO_INR).toFixed(2);

    setResult({
      input: parsedAmount,
      toEuro: inrToEuro,
      toInr: euroToInr
    });
  };

  return (
    <div className="card">
      <h2>Currency Converter</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
        Convert between Indian Rupees (INR) and Euro (€).
      </p>
      
      <form onSubmit={handleSubmit} className="form-group">
        <label htmlFor="amount">Enter Amount:</label>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input 
            type="number" 
            id="amount" 
            className="form-input" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 1000"
            style={{ flex: 1 }}
          />
          <button type="submit" className="btn btn-primary">
            Convert
          </button>
        </div>
      </form>

      {result && (
        <div className="message-box" style={{ marginTop: '1.5rem' }}>
          <strong>Conversion Results:</strong>
          <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div>₹ {result.input} INR = <strong>€ {result.toEuro} Euro</strong></div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.5rem' }}>
              € {result.input} Euro = <strong>₹ {result.toInr} INR</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
