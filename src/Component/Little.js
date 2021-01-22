import { Component } from 'react'

class Little extends Component {
  componentWillUnmount() {
    alert('Goodbye!!')
  }

  render() {
    return (
      <div>
        <h5>Hi! I'm Little and it's nice to meet you!!</h5>
      </div>
    )
  }
}

export default Little
