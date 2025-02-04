import React, { useState, useEffect } from "react";
import TextBox from "../../components/TextBox";
import CompareNum from '../../components/CompareNum';
import { motion } from 'framer-motion';

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};



function Day4() {
    const [array, setArray] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [comparing, setComparing] = useState({});
    const [processedData, setProcessedData] = useState("");
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const len = 3;
    const [currentIndex, setCurrentIndex] = useState( 0); // Track the current index
    const [duration, setDuration] = useState(1000); // Make `first` dynamic

    useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    if (prevIndex < first.length - 1) {
                        return prevIndex + 1;
                    } else {
                        clearInterval(interval);
                        return prevIndex;
                    }
                });
            }, duration); // Move every 1 second

            return () => clearInterval(interval);
        }, [first, second]);
    const processInputData = (inputData) => {
      const lines = inputData.split("\n").filter(lines => lines.trim()!==" ");
      const splitLines = lines.map(lines=>lines.trim().split(/\s+/));
      const firstArray = splitLines.map(([first])=>first);
      const secondArray = splitLines.map(([,second])=>second);
      // for (const line of lines) {
      //     const [first, second] = line.split(" "); // Destructure the split result
      //     firstArray.push(first);
      //     secondArray.push(second);
      //   }
        setFirst(firstArray);
        setSecond(secondArray);
        console.log("First: ", firstArray);
        console.log("Second: ", secondArray);
        const result = `Antall linjer: ${lines.length}\nFørste linje: ${lines[0] || "Ingen linje"}`;
      setProcessedData(result);
    };


  return (
    <div className="data-processor">
      <h1>Lim inn data for prosessering</h1>
      <TextBox onInputChange={processInputData} />
      <h2>Resultat:</h2>
        {first && <h3>First Array: {first.slice(0, len).join(", ") } {(first.length>len)&&"..."}</h3>}
        {second && <h3>Second Array: {second.slice(0, len).join(", ")}{(first.length>len)&&" ..."}</h3>}
      {first && <div className="First" style={{ marginBottom: '20px' }}>
                {first.map((num, index) => (
                    <motion.div
                        key={index}
                        style={{
                            display: 'inline-block',
                            width: '30px',
                            height: '30px',
                            margin: '5px',
                            textAlign: 'center',
                            lineHeight: '30px',
                            backgroundColor: '#f0f0f0',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                        animate={
                            index === currentIndex
                                ? { scale: 1.2, backgroundColor: '#FFD700' }
                                : { scale: 1, backgroundColor: '#f0f0f0' }
                        }
                        transition={{ duration: 0.5 }}
                    >
                        {num}
                    </motion.div>
                ))}
            </div>
      }
      {second &&
            <div className="Second">
                {second.map((num, index) => (
                    <motion.div
                        key={index}
                        style={{
                            display: 'inline-block',
                            width: '30px',
                            height: '30px',
                            margin: '5px',
                            textAlign: 'center',
                            lineHeight: '30px',
                            backgroundColor: '#f0f0f0',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                        animate={
                            index === currentIndex
                                ? { scale: 1.2, backgroundColor: '#00FA9A' }
                                : { scale: 1, backgroundColor: '#f0f0f0' }
                        }
                        transition={{ duration: 0.5 }}
                    >
                        {num}
                    </motion.div>
                ))}
            </div>
      }
      <pre>{processedData}</pre>

    </div>
  );
}

export default Day4;