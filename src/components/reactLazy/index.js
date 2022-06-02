import React, { useEffect } from 'react'

export default function ReactLazy() {
    useEffect(() => {
        console.log('I am reactLazy')
    },[])
    return (
        <h3>raectLazy</h3>
    )
}
