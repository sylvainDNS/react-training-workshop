import { useState } from 'react'

const One = () => {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(value => value + 1)
  }

  return (
    <div>
      <h2>Challenge 1</h2>
      <p>Count is: {count}</p>
      <button onClick={increase}>Increase count!</button>
    </div>
  )
}

export default One
