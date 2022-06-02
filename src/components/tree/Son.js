import React, {useEffect} from 'react';
import SubSon from './SubSon'

export default function Son(props) {
  useEffect(() => {
    console.log('here is Son component')
  },)
  return (
    <div>
      <SubSon />
      <h4>This is Son component</h4>
    </div>
  )
}
