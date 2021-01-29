import { Component } from 'react'

class Animes extends Component {
  state = { animes: [], isLoading: true, error: null }

  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films/')
      .then(response => Promise.all([response, response.json()]))
      .then(([{ status }, body]) => {
        if (400 <= status && typeof body === 'object' && body !== null) {
          return Promise.reject(body)
        }

        this.setState({ ...this.state, animes: body, isLoading: false })
      })
      .catch(error =>
        this.setState({
          ...this.state,
          isLoading: false,
          error: error.message,
        })
      )
  }

  render() {
    const { isLoading, animes, error } = this.state

    if (error) return <pre>{error}</pre>

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
