import React from 'react'
import{ BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './AboutUs.js';
import Home from './HomePage.js';
import "./App.css";


function App() {
  return (

    <Router>
      <nav>
        <Link to="/">HomePage</Link>
        <Link to="/AboutUs">AboutUs</Link>
      </nav>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<About />} />

    </Routes>

    </Router>
    
  );
}


export default App;


