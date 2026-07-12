import React from 'react';
import CalculateScore from './Components/CalculateScore';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <CalculateScore 
        Name="Sahil" 
        School="Cognizant Academy" 
        Total={284} 
        goal={3} 
      />
    </div>
  );
}

export default App;
