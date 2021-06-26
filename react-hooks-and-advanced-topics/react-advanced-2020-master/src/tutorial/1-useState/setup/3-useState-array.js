import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  // this is a diffrent pay to pass use state  React. or import it
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople);
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            {/* creating a button to remove an individual item/ in this example were creating a function then calling it versus doing it inline */}
            <button onClick={() => removeItem(id)}>remove item</button>
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
