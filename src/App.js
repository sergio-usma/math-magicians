import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';
import './App.css';

const App = () => (
  <Router>
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quote />} />
      </Routes>
    </>
  </Router>
);

export default App;
