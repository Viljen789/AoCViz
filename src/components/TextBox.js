import React, { useState } from "react";

const TextBox = ({ onInputChange }) => {
  const [inputData, setInputData] = useState("3   4\n4   3\n2   5\n1   3\n3   9\n3   3");

  const handleInputChange = (event) => {
    setInputData(event.target.value);
    onInputChange(event.target.value);
  };

  return (
    <textarea
      rows="10"
      cols="50"
      placeholder="Lim inn data her..."
      value={inputData}
      onChange={handleInputChange}
    >
    </textarea>
  );
};

export default TextBox;