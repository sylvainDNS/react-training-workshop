import { Component } from 'react'
import Little from './Little'

class Five extends Component {
  state = {
    showLittle: true,
  }

  toggleLittle = () => {
    this.setState({ showLittle: !this.state.showLittle })
  }

  render() {
    return (
      <div>
        <h2>Challenge 5</h2>
        <h3>Below, Little is waiting to disappear</h3>
        <button onClick={this.toggleLittle}>Click to toggle alert</button>
        {this.state.showLittle ? <Little /> : null}
      </div>
    )
  }
}

export default Five
