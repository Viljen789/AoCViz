// src/ArrayVisualizer.js
import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import { motion } from 'framer-motion';

const ArrayVisualizer = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [comparing, setComparing] = useState({});

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    if (isSorting) return;
    const newArray = generateArray(20);
    setArray(newArray);
    setComparing({});
  };

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = array.slice();
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setComparing({ [j]: true, [j + 1]: true });
        await sleep(100);

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await sleep(100);
        }

        setComparing({});
      }
    }
    setIsSorting(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          height: '300px',
          width: '80%',
          border: '1px solid black',
          margin: '20px 0',
        }}
      >
        {array.map((value, index) => (
          <Bar
            key={index}
            value={value}
            index={index}
            width={20}
            color="#69b3a2"
            isComparing={comparing[index]}
          />
        ))}
      </div>
      <div>
        <button onClick={resetArray} disabled={isSorting}>
          Generate New Array
        </button>
        <button onClick={bubbleSort} disabled={isSorting}>
          Bubble Sort
        </button>
      </div>
    </div>
  );
};
