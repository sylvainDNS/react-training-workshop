import { useDispatch, useSelector } from 'react-redux'
import * as OneState from '../State/One'

const One = () => {
  const dispatch = useDispatch()
  const count = useSelector(OneState.select.count)

  const handleClick = () => dispatch(OneState.increase())

  return (
    <div>
      <h2>Challenge 1</h2>
      <p>Count is: {count}</p>
      <button onClick={handleClick}>Increase count!</button>
    </div>
  )
}

export default One
