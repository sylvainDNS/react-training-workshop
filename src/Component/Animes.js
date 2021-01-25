import { Component } from 'react'

class Animes extends Component {
  state = { animes: [], isLoading: true, error: null }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed with HTTP code ' + response.status)
        }
        return response
      })
      .then(response => response.json())
      .then(
        animes => this.setState({ ...this.state, animes, isLoading: false }),
        error =>
          this.setState({
            ...this.state,
            isLoading: false,
            error: error,
          })
      )
  }

  render() {
    const { isLoading, animes, error } = this.state

    if (error) return <pre>{error.message}</pre>

    if (isLoading) return <p>Loading...</p>

    return (
      <ul>
        {animes.map((anime, index) => (
          <li key={`animes-list-${index}-${anime.id}`}>{anime.title}</li>
        ))}
      </ul>
    )
  }
}

export default Animes
