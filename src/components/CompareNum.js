import React from 'react';
import { motion } from 'framer-motion';

const CompareNum = ({ value, index, color, isComparing }) => {
  return (
    <motion.div
      layout
      initial={{ backgroundColor: color }}
      animate={{
        backgroundColor: isComparing ? '#f39c12' : color,
      }}
      transition={{ duration: 0.5 }}
      style={{
        width: '30px',
        margin: '0 2px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px',
        backgroundColor: isComparing ? '#f39c12' : color,
        position: 'relative',
    }}
    >
        {value}
    </motion.div>
  );
};

export default CompareNum;
