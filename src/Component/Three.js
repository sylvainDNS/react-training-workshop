import { useState } from 'react'

const Three = () => {
  const [brand, setBrand] = useState('Simca')
  const [type, setType] = useState('1000 Rallye 2')
  const [year, setYear] = useState(1978)
  const [isUsed, setIsUsed] = useState(true)

  const swapCar = () => {
    setBrand('Tesla')
    setType('Model S')
    setYear('2020')
    setIsUsed(false)
  }

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
      <button onClick={swapCar}>Swap Car!</button>
    </div>
  )
}

export default Three
