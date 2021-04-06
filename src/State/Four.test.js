import * as FourState from './Four'

test(`
  it reduces to the initial state
  when no action is specified
`, () => {
  const state = FourState.reducer(undefined, {})

  expect(state).toEqual(FourState.INITIAL_STATE)
})

test(`
  it reduces the setMessage action
`, () => {
  const message = "We're going to learn React functional components!"
  const action = FourState.setMessage(message)
  const state = FourState.reducer(undefined, action)

  expect(state).toEqual({ message })
})
