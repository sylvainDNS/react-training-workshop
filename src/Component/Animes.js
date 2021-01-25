import { useEffect, useState } from 'react'

const Animes = () => {
  const [animes, setAnimes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed with HTTP code ' + response.status)
        }
        return response
      })
      .then(response => response.json())
      .then(
        animes => {
          setAnimes(animes)
          setIsLoading(false)
        },
        error => {
          setError(error)
          setIsLoading(false)
        }
      )
  }, [])

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

export default Animes
