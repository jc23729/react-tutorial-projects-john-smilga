import React, { useState } from "react";
//usestate is a function, its a named import

const UseStateBasics = () => {
  const [text, setText] = useState('useState using text, setText');
  return (
    <React.Fragment><h1>{text}</h1></React.Fragment>
     );
     

}

export default UseStateBasics;
