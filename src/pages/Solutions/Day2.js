// SlidingBlockList.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Configuration constants
const VISIBLE_COUNT = 5; // Number of blocks visible at a time
const AUTO_SLIDE_INTERVAL = 3000; // Time between transitions (milliseconds)
const TRANSITION_DURATION = 0.5; // Animation duration (seconds)
const ITEM_WIDTH = 100; // Width of each block (in pixels)
const ITEM_MARGIN = 10; // Horizontal margin around each block

// Our list of items (could be any data)
const dataList = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
];

const SlidingBlockList = () => {
  // currentIndex tracks the start index of the visible window.
  // We assume that if there are enough items, the window is dataList[currentIndex] ... dataList[currentIndex + VISIBLE_COUNT - 1]
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the window at set intervals.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < dataList.length - VISIBLE_COUNT ? prev + 1 : 0,
      );
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Compute the items currently in the sliding window.
  const visibleItems = dataList.slice(
    currentIndex,
    currentIndex + VISIBLE_COUNT,
  );

  // Set the container width to fit the visible blocks.
  const containerWidth = visibleItems.length * (ITEM_WIDTH + ITEM_MARGIN * 2);

  return (
    <div
      style={{
        width: containerWidth,
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Use a flex container to line up the blocks horizontally */}
      <motion.div style={{ display: "flex" }}>
        <AnimatePresence initial={false}>
          {visibleItems.map((item, i) => {
            // Create a unique key using the original index from dataList.
            // (currentIndex + i ensures that the leftmost item gets removed
            // and a new one appears on the right as the window advances.)
            const key = currentIndex + i;
            return (
              <motion.div
                key={key}
                layout // Enable automatic layout animations on repositioning.
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  duration: TRANSITION_DURATION,
                  ease: "easeInOut",
                }}
                style={{
                  width: ITEM_WIDTH,
                  margin: `0 ${ITEM_MARGIN}px`,
                  padding: "20px",
                  background: "#f0f0f0",
                  textAlign: "center",
                  borderRadius: 4,
                  flexShrink: 0,
                }}
              >
                {item}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SlidingBlockList;
