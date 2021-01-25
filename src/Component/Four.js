import { useEffect, useState } from 'react'

const Four = () => {
  const [message, setMessage] = useState("What's happening this week?")

  useEffect(() => {
    setTimeout(() => {
      setMessage("We're going to learn React functional components!")
    }, 5000)
  }, [])

  return (
    <div>
      <h2>Challenge 4</h2>
      <p>Status: {message}</p>
    </div>
  )
}

export default Four
