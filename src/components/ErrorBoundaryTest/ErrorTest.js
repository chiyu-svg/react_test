import React, { useState, useEffect } from 'react'

export default function ErrorTest() {
  const [ person, setPersons ] = useState([1,2,3,4,5]);
  // useEffect(() => {
  //   const timeOutId = setTimeout(() => {
  //       setPersons(undefined)
  //   }, 3000);
  //   return () => {
  //       clearTimeout(timeOutId);
  //   }
  // }, [])
  return (
    <div>
        {
            person.map((item, index) => <p key={index}>{ item }</p>)
        }
        <p>ErrorTest</p>
    </div>
  )
}
