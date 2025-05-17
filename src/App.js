import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'
import EmailCheck from './Pages/EmailCheck';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/check-email" element={<EmailCheck />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
);
}

export default App;
