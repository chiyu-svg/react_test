import React, { forwardRef } from 'react'

// export default function RefSon(props) {
//   return (
//     <button ref={props.refButton}>{ props.name }</button>
//   )
// }
export default forwardRef((props, ref) => {
    return (
        <button ref={ref}>{ props.name }</button>
    )
})
