import { render, screen } from '@testing-library/react'
import Little from './Little'

test(`
  it renders Little component
  and display alert on unmount
`, () => {
  const { unmount } = render(<Little />)

  const h5 = screen.queryByRole('heading')

  expect(h5).toHaveTextContent("Hi! I'm Little and it's nice to meet you!!")

  expect(window.alert).not.toHaveBeenCalled()
  unmount()
  expect(window.alert).toHaveBeenCalledTimes(1)

  expect(h5).not.toBeInTheDocument()
})
