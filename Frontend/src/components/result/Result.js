import React from "react";

function Result(props) {
  let myString = props.res;
  if (myString.length === 0) {
    myString = "Error No result to display ⚠";
  }
  myString = myString.replace("Answer: ", "");
  return (
    <>
      <div className="container mx-auto pt-32 md:pl-64 md:pr-64  sm:pr-32 sm:pl-32 px-4 sm:px-0 mb-9">
        <p className="text-3xl font-semibold text-gray-900">Result</p>
        <p className="mt-2 text-lg text-gray-600">
          Your Prioritized AIVINYA powered schedule
        </p>
        <div className="container mt-10 mb-10 mx-auto pb-10 bg-slate-800 text-white px-4 py-3 text-xl rounded-xl sm:px-6">
          {myString.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Result;
