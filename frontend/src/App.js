import React from 'react';
import './App.css';
import PortfolioDashboard from './components/PortfolioDashboard';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <PortfolioDashboard />
      <Toaster />
    </div>
  );
}

export default App;