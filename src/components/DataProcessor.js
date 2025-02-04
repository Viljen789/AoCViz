import React, { useState } from "react";
import TextBox from "./TextBox";

function DataProcessor() {
  const [processedData, setProcessedData] = useState("");

  const processInputData = (inputData) => {
    const lines = inputData.split("\n");
    const result = `Antall linjer: ${lines.length}\nFørste linje: ${lines[0] || "Ingen linje"}`;
    setProcessedData(result);
  };

  return (
    <div className="data-processor">
      <h1>Lim inn data for prosessering</h1>
      <TextBox onInputChange={processInputData} />
      <h2>Resultat:</h2>
      <pre>{processedData}</pre>
    </div>
  );
}

export default DataProcessor;