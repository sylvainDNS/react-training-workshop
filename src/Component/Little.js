import { useEffect } from 'react'

const Little = () => {
  useEffect(() => () => alert('Goodbye!!'), [])

  return (
    <div>
      <h5>Hi! I'm Little and it's nice to meet you!!</h5>
    </div>
  )
}

export default Little
