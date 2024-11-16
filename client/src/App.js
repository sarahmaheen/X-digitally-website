// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <div className="App">
      {/* Navbar at the top */}
      <Navbar />

      {/* HeroSection contains all sections */}
      <HeroSection />
    </div>
  );
};

export default App;
