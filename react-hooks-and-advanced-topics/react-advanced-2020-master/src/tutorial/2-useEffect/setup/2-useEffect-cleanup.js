import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  // so we setup useState which is our hook state
  const [size, setSize] = useState(window.innerWidth);

    //will update the size every time
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  // we use our callback function and add our eventListener listening to our resize event
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  });
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
