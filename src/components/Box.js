// src/Box.js
import React from 'react';
import '../styles/box.css';

const Box = ({ children, className, style, onClick }) => {
  return <div className={`box ${className}`} style = {style} onClick = {onClick}>{children}</div>;
};

export default Box;
