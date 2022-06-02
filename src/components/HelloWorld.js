import React, { useState } from "react";

// React 组件本质是一个函数，可接收一个参数，返回一个 React 元素
// props 组件不允许被修改
export default function HelloWorld(props) {
  const isRenderFlag = false;
  const isRenderSpan = true;
  const [inputNums, setInputNums] = useState([1,2,3,4]);
  const addInput = () => {
    const targMums = [0, ...inputNums];
    setInputNums(targMums);
  }
  
  return (
    <div>
      {/* 可通过 {} 的方式进行 表达式 的提交渲染 */}
      { isRenderFlag && <button>我应该被渲染</button> }
      {/* 如果一层三目运算符不足以表达逻辑，那么就用两层， 如果两层还是不行的化就需要考虑抽离组件  */}
      { isRenderSpan? <span>true 被显示</span>:<span>false 被显示</span> }
      {
        inputNums.map((item, index) => {
          return <div key={index}><span>{item}: </span><input></input></div>
        })
      }
      <button onClick={addInput}>增加一个 input</button>
      <div>HelloWorld</div>
    </div>
  );
}
