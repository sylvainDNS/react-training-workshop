import * as FiveState from './Five'

test(`
  it reduces to the initial state
  when no action is specified
`, () => {
  const state = FiveState.reducer(undefined, {})

  expect(state).toEqual(FiveState.INITIAL_STATE)
})

test(`
  it reduces the toggleLittle action
`, () => {
  const action = FiveState.toggleLittle()

  const firstState = FiveState.reducer(undefined, action)
  expect(firstState).toEqual({ showLittle: false })

  const secondState = FiveState.reducer(firstState, action)
  expect(secondState).toEqual({ showLittle: true })
})
