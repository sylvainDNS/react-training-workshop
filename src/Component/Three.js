import { useDispatch, useSelector } from 'react-redux'
import * as ThreeState from '../State/Three'

const Three = () => {
  const dispatch = useDispatch()
  const brand = useSelector(ThreeState.select.brand)
  const type = useSelector(ThreeState.select.type)
  const year = useSelector(ThreeState.select.year)
  const isUsed = useSelector(ThreeState.select.isUsed)

  const handleClick = () => dispatch(ThreeState.swapCar())

  return (
    <div>
      <h2>Challenge 3</h2>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Car spec</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brand</td>
            <td>{brand}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{type}</td>
          </tr>
          <tr>
            <td>Year</td>
            <td>{year}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{isUsed ? 'Used' : 'Brand new!'}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleClick}>Swap Car!</button>
    </div>
  )
}

export default Three
