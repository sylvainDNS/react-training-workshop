import { useState } from 'react'
import Little from './Little'

const Five = () => {
  const [showLittle, setShowLittle] = useState(true)

  const toggleLittle = () => {
    setShowLittle(value => !value)
  }

  return (
    <div>
      <h2>Challenge 5</h2>
      <h3>Below, Little is waiting to disappear</h3>
      <button onClick={toggleLittle}>Click to toggle alert</button>
      {showLittle ? <Little /> : null}
    </div>
  )
}

export default Five
