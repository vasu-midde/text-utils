import './App.css';
import Navbar from './components/Navbar';
import Inputs from './components/Inputs';
import About from './components/About';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar Title="TextUtils" link="/About" />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Inputs heading="Enter your text" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
