import React from "react";

export default function Tree(props) {
  const { name, age, valueArray } = props;
  return (
    <div>
      <p>Tree</p>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <ul>
        {valueArray.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
