import React from "react";

const Results = ({ word, index }) => {
  return <div key={index}>{word ? word : "нет совпадений"}</div>;
};

export default Results;
