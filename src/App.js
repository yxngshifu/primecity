import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Prices from './Components/Prices';
import Services from './Components/Services';

function App() {
  return (
    
    <Router>
      <div>
        <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/prices" element={<Prices/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
