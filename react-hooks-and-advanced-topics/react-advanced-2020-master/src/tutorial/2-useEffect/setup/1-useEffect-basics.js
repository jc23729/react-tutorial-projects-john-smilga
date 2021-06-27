import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  // every function we place will run after we re-render
  useEffect(() => {
    const [value, setValue] = useState(0);
  })
  return (
    <>
      <h1>{value}</h1>

      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
