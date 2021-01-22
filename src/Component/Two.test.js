import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Two from './Two'

test(`
  it changes user name
  on button click
`, () => {
  render(<Two />)

  expect(screen.getByText(/Louise/)).toBeInTheDocument()
  expect(screen.queryByText(/Michel/)).not.toBeInTheDocument()

  expect(screen.getByRole('button')).toBeInTheDocument()
  userEvent.click(screen.getByRole('button'))

  expect(screen.getByText(/Michel/)).toBeInTheDocument()
  expect(screen.queryByText(/Louise/)).not.toBeInTheDocument()
})
