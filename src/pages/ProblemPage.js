import React from "react";
import { useParams } from "react-router-dom";

import Day1 from "./Solutions/Day1";
import Practice from "../components/Practice";
import DataProcessor from "../components/DataProcessor";
import Day4 from "./Solutions/Day4";
import Day5 from "./Solutions/Day5";
import Day6 from "./Solutions/Day6";
import Day7 from "./Solutions/Day7";
import Day8 from "./Solutions/Day8";
import SlidingBlockList from "./Solutions/Day2";

const solutions = {
  1: Day1,
  2: Practice,
  3: DataProcessor,
  4: Day4,
  5: Day5,
  6: Day6,
  7: Day7,
  8: Day8,
  9: SlidingBlockList,
};
const ProblemPage = () => {
  const { day } = useParams();
  const dayInt = parseInt(day);
  const DayComponent = solutions[dayInt] || (() => <h1>Day not found</h1>);

  return (
    <div>
      <h1>Solution for Day {dayInt}</h1>
      <DayComponent />
    </div>
  );
};
export default ProblemPage;
