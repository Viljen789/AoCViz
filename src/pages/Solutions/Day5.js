import React, { useState, useEffect } from 'react';
import Bar from '../../components/Bar';
import { motion } from 'framer-motion';

const generateArray = (size, min = 10, max = 100) => {
  return Array.from({ length: size }, () =>
    Math.floor(Math.random() * (max - min + 1)) + min
  );
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

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
      <h1>Bubble Sort Visualizer</h1>
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
        <button onClick={resetArray} disabled={isSorting} style={{ marginRight: '10px' }}>
          Generate New Array
        </button>
        <button onClick={bubbleSort} disabled={isSorting}>
          Bubble Sort
        </button>
      </div>
    </div>
  );
};

export default ArrayVisualizer;
