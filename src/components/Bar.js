// src/Bar.js
import React from 'react';
import { motion } from 'framer-motion';

const Bar = ({ value, index, width, color, isComparing }) => {
  return (
    <motion.div
      layout
      initial={{ backgroundColor: color }}
      animate={{
        backgroundColor: isComparing ? '#f39c12' : color,
      }}
      transition={{ duration: 0.5 }}
      style={{
        height: `${value}%`,
        width: `${width}px`,
        margin: '0 2px',
        backgroundColor: isComparing ? '#f39c12' : color,
      }}
    />
  );
};

export default Bar;
