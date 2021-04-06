import * as TwoState from './Two'

test(`
  it reduces to the initial state
  when no action is specified
`, () => {
  const state = TwoState.reducer(undefined, {})

  expect(state).toEqual(TwoState.INITIAL_STATE)
})

test(`
  it reduces the changeUser action
`, () => {
  const action = TwoState.changeUser()
  const state = TwoState.reducer(undefined, action)

  expect(state).toEqual({ activeUser: 'Michel' })
})
