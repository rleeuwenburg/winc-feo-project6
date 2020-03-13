import React from 'react';
import BarChart from './BarChart';
import Average from './AverageRating';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Winc Academy project W6D5: Student Dashboard</h1>
        <BarChart />
        <Average />
      </header>
    </div>
  );
}

export default App;
