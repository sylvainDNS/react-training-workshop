import { useState } from 'react'

const Two = () => {
  const [activeUser, setActiveUser] = useState('Louise')
  const changeUser = () => {
    setActiveUser('Michel')
  }

  return (
    <div>
      <h2>Challenge 2</h2>
      <p>Active user is: {activeUser}</p>
      <button onClick={changeUser}>Change user</button>
    </div>
  )
}

export default Two
