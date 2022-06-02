import React, { Component, createContext, useState, useEffect} from 'react'
import Son from './Son'
import SubSon1 from './SubSon1'

// context 中的值被修改了，与之相关消费组件都会被重新执行（使用 consumer 的组件），注意了是重新执行，不是重新渲染(不走生命周期函数)
export const ValueContext = createContext("hello");
export const ValueContext2 = createContext("hello");
export default function Father () {
    const [testValue, setTestValue] = useState('world');
    const [count, setCount] = useState(1);
    const updateValue  = () => {
      setTestValue('Hello world')
    }
    return (
      <div>
        <ValueContext.Provider value={ testValue }>
          <ValueContext2.Provider value={ 'good'}>
            {/* 当组件的参数修改了，会重新渲染组件（重新执行生命周期的） */}
            <Son count={count}/>
            <SubSon1 />
          </ValueContext2.Provider>
        </ValueContext.Provider>
        <h4>This is Father component</h4>
        <button onClick={updateValue}>Click here will happend spurise</button>
        <button onClick={() => setCount(2)}>Click me to update count</button>
      </div>
    )
}

