import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Five from './Five'

test(`
  it toggle Little component
  on button click
`, () => {
  render(<Five />)

  const initialHeadings = [
    'Challenge 5',
    'Below, Little is waiting to disappear',
    "Hi! I'm Little and it's nice to meet you!!",
  ]
  const firstScreenHeadings = screen.queryAllByRole('heading')
  initialHeadings.map((heading, index) =>
    expect(firstScreenHeadings[index]).toHaveTextContent(heading)
  )

  expect(screen.getByRole('button')).toBeInTheDocument()
  userEvent.click(screen.getByRole('button'))

  const expectedHeadings = [
    'Challenge 5',
    'Below, Little is waiting to disappear',
  ]
  const secondScreenHeadings = screen.queryAllByRole('heading')
  expectedHeadings.map((heading, index) =>
    expect(secondScreenHeadings[index]).toHaveTextContent(heading)
  )
  expect(screen.queryByText(initialHeadings[2])).not.toBeInTheDocument()
})
