// src/Box.js
import React from 'react';
import '../styles/box.css'; // Import the CSS file

const Box = ({ children, style }) => {
  return <div className="box" style = {style}>{children}</div>;
};

export default Box;
