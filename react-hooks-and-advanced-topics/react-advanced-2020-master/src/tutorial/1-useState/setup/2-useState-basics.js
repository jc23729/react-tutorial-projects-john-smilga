import React, { useState } from "react";
//usestate is a function, its a named import

const UseStateBasics = () => {
  const [text, setText] = useState("useState using text, setText. Press the Change Title to change the Title");
  const handleClick = () => {
    setText("Woop, woop, you changed my state");
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
