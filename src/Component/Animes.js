import { useEffect, useState } from 'react'

const Animes = () => {
  const [animes, setAnimes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films/')
      .then(response => Promise.all([response, response.json()]))
      .then(([{ status }, body]) => {
        if (400 <= status && typeof body === 'object' && body !== null) {
          return Promise.reject(body)
        }

        setAnimes(body)
        setIsLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

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

export default Animes
