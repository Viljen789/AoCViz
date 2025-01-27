// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Lobby from './pages/lobby';
import './App.css'; // Optional: For additional styling

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Lobby />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
