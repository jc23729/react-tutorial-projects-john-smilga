import React, { useState } from "react";
//usestate is a function, its a named import

const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  
  const handleClick = () => {
    if (text === 'random title') {
      setText('Hello World');
    } else {
      setText('random title')
    }
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
