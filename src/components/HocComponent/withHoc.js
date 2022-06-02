import React from "react";

export function withAddButton(Leaf) {
  return () => (
    <div>
      <button>被添加的按钮</button>
      <Leaf />
    </div>
  );
}
