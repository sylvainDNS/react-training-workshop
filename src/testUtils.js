import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from './Store'

export const render = (
  ui,
  { store = createStore(), ...renderOptions } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  )

  return rtlRender(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  })
}
