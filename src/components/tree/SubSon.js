import React, { useEffect } from 'react'
import { ValueContext } from './Father'

export default function SubSon(props) {
  useEffect(() => {
    console.log('This is SubSon component');
  }, [])
  return (
    <div>
        <ValueContext.Consumer>
            {
                value => <p>{ value }</p>
            }
        </ValueContext.Consumer>
        <h4>This is SubSon component</h4>
    </div>
  )
}
