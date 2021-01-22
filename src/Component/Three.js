import { Component } from 'react'

class Three extends Component {
  state = {
    brand: 'Simca',
    type: '1000 Rallye 2',
    year: 1978,
    isUsed: true,
  }

  swapCar = () => {
    this.setState({
      brand: 'Tesla',
      type: 'Model S',
      year: 2020,
      isUsed: false,
    })
  }

  render() {
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
              <td>{this.state.brand}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{this.state.type}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{this.state.year}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{this.state.isUsed ? 'Used' : 'Brand new!'}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.swapCar}>Swap Car!</button>
      </div>
    )
  }
}

export default Three
