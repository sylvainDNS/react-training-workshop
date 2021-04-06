import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as SixState from '../State/Six'

const Animes = () => {
  const dispatch = useDispatch()
  const animes = useSelector(SixState.select.animes)
  const isLoading = useSelector(SixState.select.isLoading)
  const error = useSelector(SixState.select.error)

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films/')
      .then(response => Promise.all([response, response.json()]))
      .then(([{ status }, body]) => {
        if (400 <= status && typeof body === 'object' && body !== null) {
          return Promise.reject(body)
        }

        dispatch(SixState.animesReceived(body))
      })
      .catch(error => {
        dispatch(SixState.failed(error.message))
      })
  }, [dispatch])

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
