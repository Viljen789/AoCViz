// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Lobby from './pages/Lobby';
import './App.css';
import ProblemPage from './pages/ProblemPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Lobby />} />
            <Route path="/problem/:day" element={<ProblemPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
