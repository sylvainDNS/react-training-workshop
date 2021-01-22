import { render, screen } from '@testing-library/react'
import Four from './Four'

jest.useFakeTimers()
jest.runAllTimers()

test(`
  it displays a sentence
  which change after 5s
`, () => {
  render(<Four />)

  expect(
    screen.getByText("Status: What's happening this week?")
  ).toBeInTheDocument()

  setTimeout(() => {
    expect(
      screen.getByText(
        "Status: We're going to learn React functional components!"
      )
    ).toBeInTheDocument()
  }, 5000)
})
