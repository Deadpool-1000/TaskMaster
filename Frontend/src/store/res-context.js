import React, { useState } from "react";

const ResultContext = React.createContext({
  result: "",
});

export function ContextProvider(props) {
  const [result, setResult] = useState("");
  function modifyResult(res) {
    setResult(res);
  }
  const contextValue = {
    result,
    modifyResult,
  };

  return (
    <ResultContext.Provider value={contextValue}>
      {props.children}
    </ResultContext.Provider>
  );
}

export default ResultContext;
