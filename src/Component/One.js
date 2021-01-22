const { Component } = require('react')

class One extends Component {
  state = {
    count: 0,
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <h2>Challenge 1</h2>
        <p>Count is: {this.state.count}</p>
        <button onClick={this.increase}>Increase count!</button>
      </div>
    )
  }
}

export default One
