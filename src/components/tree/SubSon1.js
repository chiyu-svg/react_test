import React, { useEffect } from 'react'
import { ValueContext2 } from './Father'


export default function SubSon1() {
  useEffect(() => {
      console.log('I am subSon1 and will be called')
  }, [])
  return (
    <div>
        <ValueContext2.Consumer>
            {
                value => <h2>{ value }</h2>
            }
        </ValueContext2.Consumer>
        <h3>this is SubSon1</h3>
    </div>
  )
}
