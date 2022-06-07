import React from 'react'

// 使用点语法，更能表现出两个组件之间的关系，比如 Provider, Customer
const appState = {
    name: 'zhangsan',
    age: 19
}
const UpdateStet = (props) => {
    const { value } = props;
    const addValue = () => {
        appState.value = value;
    }
    const deleteValue = () => {
        Reflect.deleteProperty(appState, 'name')
    }
    return (
        <div>
            <button onClick={addValue}>addValue</button>
            <button onClick={deleteValue}>deleteValue</button>
        </div>
    )
}
const ShowState = () => {
    const showMessage = () => {
        console.log('@@@appState', appState);
    }
    return (
        <button onClick={showMessage}>display inforMation</button>
    )
}

export default {
    UpdateStet,
    ShowState
}
