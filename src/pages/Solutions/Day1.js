import React, { useState, useEffect, useRef } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import TextBox from "../../components/TextBox";
import "../../styles/chill-theme.css";
import "../../styles/Solutions/Day1.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Day1 = () => {
  const [processedData, setProcessedData] = useState("");
  const [originalFirstArray, setOriginalFirstArray] = useState([]);
  const [originalSecondArray, setOriginalSecondArray] = useState([]);
  const [step, setStep] = useState(0);

  const [sortedFirstArray, setSortedFirstArray] = useState([]);
  const [sortedSecondArray, setSortedSecondArray] = useState([]);
  const [firstSorted, setFirstSorted] = useState(false);
  const [secondSorted, setSecondSorted] = useState(false);

  const [activeIds, setActiveIds] = useState([]);
  const [duration, setDuration] = useState(1000);
  const [sort, setSort] = useState(false);
  const animationSpeeds = [1, 2, 5, 20, 100];
  const [currentSpeed, setCurrentSpeed] = useState(1);
  const durationRef = useRef(duration);
  const steps = ["Sort", "Compare"];
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Each child will animate with a 0.3s delay between them
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    durationRef.current = duration;
  }, [duration]);

  const processInputData = (input) => {
    const lines = input.split("\n");
    const first = [];
    const second = [];

    lines.forEach((line) => {
      const [firstValue, secondValue] = line.split(/\s+/).map(Number);
      if (!isNaN(firstValue))
        first.push({ id: first.length, value: firstValue });
      if (!isNaN(secondValue))
        second.push({ id: second.length, value: secondValue });
    });

    setOriginalFirstArray([...first]);
    setOriginalSecondArray([...second]);
    setSortedFirstArray([...first]);
    setSortedSecondArray([...second]);
    setProcessedData(
      `Antall linjer: ${lines.length}\nFørste linje: ${lines[0] || "Ingen linje"}`,
    );
  };

  useEffect(() => {
    if (sort) {
      const sorted = [...sortedFirstArray].sort((a, b) => a.value - b.value);
      setSortedFirstArray(sorted);
      setFirstSorted(true);
      setSortedSecondArray(
        [...sortedSecondArray].sort((a, b) => a.value - b.value),
      );
      setSecondSorted(true);
    }
  }, [sort]);

  return (
    <div className="day1">
      <h3>Lim inn data for prosessering</h3>
      <TextBox onInputChange={processInputData} />
      <pre>{processedData}</pre>

      {originalFirstArray.length > 0 && (
        <div
          className="arrays-display"
          style={{ display: "flex", gap: "2rem" }}
        >
          <div className="array-section">
            {firstSorted && <h4>Sorted first array</h4>}
            <LayoutGroup>
              <div
                className="elements"
                style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
              >
                {sortedFirstArray.map((item) => {
                  const isActive = activeIds.includes(item.id);
                  return (
                    <motion.div
                      layout
                      key={item.id}
                      className={`number-box ${isActive ? "active" : ""}`}
                      transition={{
                        type: "spring",
                        stiffness: 170,
                        damping: 26,
                      }}
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
      {originalSecondArray.length > 0 && (
        <div
          className="arrays-display"
          style={{ display: "flex", gap: "2rem" }}
        >
          <div className="array-section">
            <LayoutGroup>
              <div
                className="elements"
                style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
              >
                {sortedSecondArray.map((item) => {
                  const isActive = activeIds.includes(item.id);
                  return (
                    <motion.div
                      layout
                      key={item.id}
                      className={`number-box ${isActive ? "active" : ""}`}
                      // Use a spring animation with adjusted stiffness and damping
                      transition={{
                        type: "spring",
                        stiffness: 170,
                        damping: 26,
                      }}
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
            {secondSorted && <h4>Sorted second array</h4>}
          </div>
        </div>
      )}

      <div className="button-container" style={{ marginTop: "1rem" }}>
        <motion.button
          className="button"
          onClick={() => {
            setActiveIds([]);
            setSort(true);
            setStep(step + 1);
          }}
          whileTap={{ scale: 0.9 }}
        >
          Step {step + 1}: {steps[step]}
        </motion.button>
      </div>
      <div className="speed-part" style={{ marginTop: "1rem" }}>
        <div className="speed-buttons">
          <AnimatePresence>
            {step === 2 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <p>Animation Speed</p>
                <motion.ul
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    listStyle: "none",
                    padding: 0,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                >
                  {animationSpeeds.map((speed, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className={
                        "button" + (currentSpeed === speed ? " active" : "")
                      }
                      onClick={() => {
                        setDuration(1000 / speed);
                        setCurrentSpeed(speed);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {speed}x
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Day1;
