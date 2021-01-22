import { Component } from 'react'

class Four extends Component {
  state = {
    message: "What's happening this week?",
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        message: "We're going to learn React functional components!",
      })
    }, 5000)
  }

  render() {
    return (
      <div>
        <h2>Challenge 4</h2>
        <p>Status: {this.state.message}</p>
      </div>
    )
  }
}

export default Four
