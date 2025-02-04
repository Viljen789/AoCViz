import React, { useState, useEffect, useRef } from "react";
import { motion, LayoutGroup } from "framer-motion";
import TextBox from "../../components/TextBox";
import "../../styles/chill-theme.css";
import "../../styles/Solutions/Day1.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Day1 = () => {
  const [processedData, setProcessedData] = useState("");
  const [originalFirstArray, setOriginalFirstArray] = useState([]);
  const [originalSecondArray, setOriginalSecondArray] = useState([]);

  const [sortedFirstArray, setSortedFirstArray] = useState([]);
  const [sortedSecondArray, setSortedSecondArray] = useState([]);


  const [activeIds, setActiveIds] = useState([]);
  const [duration, setDuration] = useState(1000);
  const [sort, setSort] = useState(false);
  const animationSpeeds = [1, 2, 5, 20, 100];
  const durationRef = useRef(duration);
  useEffect(() => {
    durationRef.current = duration;
  }, [duration]);


const processInputData = (input) => {
  const lines = input.split("\n");
  const first = [];
  const second = [];

  lines.forEach((line) => {
    const [firstValue, secondValue] = line.split(/\s+/).map(Number);
    if (!isNaN(firstValue)) first.push({ id: first.length, value: firstValue });
    if (!isNaN(secondValue)) second.push({ id: second.length, value: secondValue });
  });

  setOriginalFirstArray([...first]);
  setOriginalSecondArray([...second]);
  setSortedFirstArray([...first]);
  setSortedSecondArray([...second]);
  setProcessedData(
    `Antall linjer: ${lines.length}\nFørste linje: ${lines[0] || "Ingen linje"}`
  );
};



  useEffect(() => {
  if (sort) {
    const bubbleSort = async () => {
      const sortArray = async (arr, setArray) => {
        const n = arr.length;
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n - i - 1; j++) {
            setActiveIds([arr[j].id, arr[j + 1].id]);
            await sleep(durationRef.current);
            if (arr[j].value > arr[j + 1].value) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              setArray([...arr]);
            }
          }
        }
      };

      await sortArray([...sortedFirstArray], setSortedFirstArray);
      await sortArray([...sortedSecondArray], setSortedSecondArray);

      setActiveIds([]);
      setSort(false);
    };
    bubbleSort();
  }
}, [sort]);

  return (
    <div className="day1">
      <h3>Lim inn data for prosessering</h3>
      <TextBox onInputChange={processInputData} />
      <pre>{processedData}</pre>

      {originalFirstArray.length > 0 && (
        <div className="arrays-display" style={{ display: "flex", gap: "2rem" }}>
          <div className="array-section">
            <h4>Original Array</h4>
            <div className="elements" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {originalFirstArray.map((item) => (
                <div key={item.id} className="number-box">
                  {item.value}
                </div>
              ))}
            </div>
          </div>

          <div className="array-section">
            <h4>Sorted Array</h4>
            <LayoutGroup>
              <div className="elements" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {sortedFirstArray.map((item) => {
                  const isActive = activeIds.includes(item.id);
                  return (
                    <motion.div
                      layout
                      key={item.id}
                      className={`number-box ${isActive ? "active" : ""}`}
                      // Use a spring animation with adjusted stiffness and damping
                      transition={{ type: "spring", stiffness: 170, damping: 26 }}
                      initial={{
                        opacity: isActive ? 1 : 0.7,
                        scale: isActive ? 1.1 : 1,
                      }}
                      animate={{
                        opacity: isActive ? 1 : 0.7,
                        scale: isActive ? 1.1 : 1,
                      }}
                      style={{
                        padding: "0.5rem",
                        margin: "0.2rem",
                        background: isActive ? "#ffeeba" : "#f8f9fa",
                        border: "1px solid #ced4da",
                        borderRadius: "4px",
                      }}
                    >
                      {item.value}
                    </motion.div>
                  );
                })}
              </div>
            </LayoutGroup>
          </div>
        </div>
      )}{originalSecondArray.length > 0 && (
        <div className="arrays-display" style={{ display: "flex", gap: "2rem" }}>
          <div className="array-section">
            <h4>Original Array</h4>
            <div className="elements" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {originalSecondArray.map((item) => (
                <div key={item.id} className="number-box">
                  {item.value}
                </div>
              ))}
            </div>
          </div>

          <div className="array-section">
            <h4>Sorted Array</h4>
            <LayoutGroup>
              <div className="elements" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {sortedSecondArray.map((item) => {
                  const isActive = activeIds.includes(item.id);
                  return (
                    <motion.div
                      layout
                      key={item.id}
                      className={`number-box ${isActive ? "active" : ""}`}
                      // Use a spring animation with adjusted stiffness and damping
                      transition={{ type: "spring", stiffness: 170, damping: 26 }}
                      initial={{
                        opacity: isActive ? 1 : 0.7,
                        scale: isActive ? 1.1 : 1,
                      }}
                      animate={{
                        opacity: isActive ? 1 : 0.7,
                        scale: isActive ? 1.1 : 1,
                      }}
                      style={{
                        padding: "0.5rem",
                        margin: "0.2rem",
                        background: isActive ? "#ffeeba" : "#f8f9fa",
                        border: "1px solid #ced4da",
                        borderRadius: "4px",
                      }}
                    >
                      {item.value}
                    </motion.div>
                  );
                })}
              </div>
            </LayoutGroup>
          </div>
        </div>
      )}

      <div className="button-container" style={{ marginTop: "1rem" }}>
        <button
          className="button"
          onClick={() => {
            setActiveIds([]);
            setSort(true);
          }}
        >
          Sort
        </button>
      </div>

      <div className="speed-buttons" style={{ marginTop: "1rem" }}>
        <p>Animation Speed:</p>
        {animationSpeeds.map((speed, index) => (
          <button
            className="button"
            key={index}
            onClick={() => setDuration(1000 / speed)}
            style={{ marginRight: "0.5rem" }}
          >
            {speed}x
          </button>
        ))}
      </div>
    </div>
  );
};

export default Day1;
