import React, { useState } from 'react'

export default function Component(props) {
    const [number, setNumber] = useState(5)
  return (
    <div>
    {number}
    <button onClick={() => {props.func(true)}}>asdasd</button>

    </div>
  )
}
