import * as OneState from './One'

test(`
  it reduces to the initial state
  when no action is specified
`, () => {
  const state = OneState.reducer(undefined, {})

  expect(state).toEqual(OneState.INITIAL_STATE)
})

test(`
  it reduces the increase action
`, () => {
  const action = OneState.increase()

  const firstState = OneState.reducer(undefined, action)
  expect(firstState).toEqual({ count: 1 })

  const secondState = OneState.reducer(firstState, action)
  expect(secondState).toEqual({ count: 2 })

  const thirdState = OneState.reducer(secondState, action)
  expect(thirdState).toEqual({ count: 3 })
})
