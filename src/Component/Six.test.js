import { render, screen, waitFor } from '@testing-library/react'
import Animes from './Six'

test(`
  it displays loading screen
  and then animes list
`, async () => {
  render(<Animes />)

  const loading = screen.getByText('Loading...')
  expect(loading).toBeInTheDocument()

  await waitFor(() => expect(loading).not.toBeInTheDocument())

  expect(screen.getByText(/mononoke/i)).toBeInTheDocument()
})
