import React from 'react';
import './App.css';
import EnhancedDashboard from './components/EnhancedDashboard';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <EnhancedDashboard />
      <Toaster />
    </div>
  );
}

export default App;