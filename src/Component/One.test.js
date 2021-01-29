import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '../testUtils'
import One from './One'

test(`
  it increments counter value
  on button click
`, () => {
  render(<One />)

  expect(screen.getByText(/Count is: 0/)).toBeInTheDocument()
  expect(screen.getByRole('button')).toBeInTheDocument()

  const increaseButton = screen.getByRole('button')

  userEvent.click(increaseButton)
  expect(screen.getByText(/Count is: 1/)).toBeInTheDocument()

  userEvent.click(increaseButton)
  expect(screen.getByText(/Count is: 2/)).toBeInTheDocument()
})
