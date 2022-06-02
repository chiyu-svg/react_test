import React, { forwardRef } from 'react'
import RefSon from './RefSon'

//
export default forwardRef((props, ref) => {
    return (
        <div>
            <button ref={ref}>HOC 组件</button>
            <RefSon {...props}/>
        </div>
    )
})

