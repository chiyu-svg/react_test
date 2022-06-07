import React from "react";

export function withAddButton(WrappedComponent, sourceData, id) {
  const valueArray = sourceData[id];
  return (props) => (
    <div>
      <button>被添加的按钮</button>
      <WrappedComponent  {...props}  valueArray={valueArray} />
    </div>
  );
}
