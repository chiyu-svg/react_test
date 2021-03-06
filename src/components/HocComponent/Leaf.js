import React from "react";

export default function Leaf(props) {
  const { name, age, valueArray } = props;
  return (
    <div>
      <p>Leaf</p>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <ul>
        {valueArray.map((item) => 
          <li key={item}>{item}</li>
        )}
      </ul>
    </div>
  );
}
