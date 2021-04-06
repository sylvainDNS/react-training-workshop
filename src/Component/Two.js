import { useDispatch, useSelector } from 'react-redux'
import * as TwoState from '../State/Two'

const Two = () => {
  const dispatch = useDispatch()
  const activeUser = useSelector(TwoState.select.activeUser)

  const handleClick = () => dispatch(TwoState.changeUser())

  return (
    <div>
      <h2>Challenge 2</h2>
      <p>Active user is: {activeUser}</p>
      <button onClick={handleClick}>Change user</button>
    </div>
  )
}

export default Two
