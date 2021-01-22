import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Three from './Three'

test(`
  it changes table content
  on button click
`, () => {
  render(<Three />)

  const initialRowsText = [
    ['Brand', 'Simca'],
    ['Type', '1000 Rallye 2'],
    ['Year', '1978'],
    ['Status', 'Used'],
  ]

  initialRowsText.forEach(([label, value]) => {
    const row = screen.queryByText(label).closest('tr')
    const utils = within(row)

    expect(utils.getByText(label)).toBeInTheDocument()
    expect(utils.getByText(value)).toBeInTheDocument()
  })

  const button = screen.queryByRole('button')
  expect(button).toBeInTheDocument()
  userEvent.click(button)

  const expectedRowsText = [
    ['Brand', 'Tesla'],
    ['Type', 'Model S'],
    ['Year', '2020'],
    ['Status', 'Brand new!'],
  ]

  expectedRowsText.forEach(([label, value]) => {
    const row = screen.queryByText(label).closest('tr')
    const utils = within(row)

    expect(utils.getByText(label)).toBeInTheDocument()
    expect(utils.getByText(value)).toBeInTheDocument()
  })
})
