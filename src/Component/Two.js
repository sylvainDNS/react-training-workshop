import { Component } from 'react'

class Two extends Component {
  state = {
    activeUser: 'Louise',
  }

  changeUser = () => {
    this.setState({
      activeUser: 'Michel',
    })
  }

  render() {
    return (
      <div>
        <h2>Challenge 2</h2>
        <p>Active user is: {this.state.activeUser}</p>
        <button onClick={this.changeUser}>Change user</button>
      </div>
    )
  }
}

export default Two
