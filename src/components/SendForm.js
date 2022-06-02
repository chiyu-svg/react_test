import React, { useState } from 'react'

export default function SendForm() {
  const [inpValue, setInpValue] = useState("");
  const changeValue = (event) => {
    setInpValue(event.target.value+'H');
  }
  return (
    <div>
        <p>姓名：{inpValue}</p>
        <label>姓名: </label>
        {/* 当标签的输入过程 和 value 有用户控制活 state 驱动的时候，我们称之为受控组件  */}
        {/* input type="file"  为非受控组件， 也能理解 */}
        <input value={inpValue} onChange={changeValue}/>
        <h2>SendForm</h2>
    </div>
  )
}
