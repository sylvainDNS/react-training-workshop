import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as FourState from '../State/Four'

const Four = () => {
  const dispatch = useDispatch()
  const message = useSelector(FourState.select.message)

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        FourState.setMessage(
          "We're going to learn React functional components!"
        )
      )
    }, 5000)
  }, [dispatch])

  return (
    <div>
      <h2>Challenge 4</h2>
      <p>Status: {message}</p>
    </div>
  )
}

export default Four
