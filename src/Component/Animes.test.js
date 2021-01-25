import { render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Animes from './Animes'

const animes = [
  { id: 0, title: 'First' },
  { id: 1, title: 'Second' },
  { id: 2, title: 'Third' },
]
const server = setupServer(
  rest.get('https://ghibliapi.herokuapp.com/films/', (_, res, ctx) =>
    res(ctx.json(animes))
  )
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test(`
  it displays loading screen
  and then animes list
`, async () => {
  render(<Animes />)

  const loading = screen.getByText('Loading...')
  expect(loading).toBeInTheDocument()

  await waitFor(() => expect(loading).not.toBeInTheDocument())

  const listItems = screen.queryAllByRole('listitem')
  animes.map((anime, index) =>
    expect(listItems[index]).toHaveTextContent(anime.title)
  )
})

test(`
  it displays loading screen
  and then shows error message
  if the request fails
`, async () => {
  server.use(
    rest.get('https://ghibliapi.herokuapp.com/films/', (_, res, ctx) => {
      return res(ctx.status(500))
    })
  )
  render(<Animes />)

  const loading = screen.getByText('Loading...')
  expect(loading).toBeInTheDocument()

  await waitFor(() => expect(loading).not.toBeInTheDocument())
  expect(screen.getByText(/Failed/)).toBeInTheDocument()
})
