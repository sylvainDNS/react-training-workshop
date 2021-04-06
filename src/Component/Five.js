import { useDispatch, useSelector } from 'react-redux'
import * as FiveState from '../State/Five'
import Little from './Little'

const Five = () => {
  const dispatch = useDispatch()
  const showLittle = useSelector(FiveState.select.showLittle)

  const handleClick = () => dispatch(FiveState.toggleLittle())

  return (
    <div>
      <h2>Challenge 5</h2>
      <h3>Below, Little is waiting to disappear</h3>
      <button onClick={handleClick}>Click to toggle alert</button>
      {showLittle ? <Little /> : null}
    </div>
  )
}

export default Five
