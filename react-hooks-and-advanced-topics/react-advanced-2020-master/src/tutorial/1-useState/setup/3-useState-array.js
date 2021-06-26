import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  // this is a diffrent pay to pass use state  React. or import it
  const [people, setPeople] = React.useState(data);
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
          </div>
        );
      })}
  {/* we want to invoke or activate it only when we click it, so we setup an arrow function
  so to clear it then we pass in the empty arrays
  */}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
