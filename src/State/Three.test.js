import * as ThreeState from './Three'

test(`
  it reduces to the initial state
  when no action is specified
`, () => {
  const state = ThreeState.reducer(undefined, {})

  expect(state).toEqual(ThreeState.INITIAL_STATE)
})

test(`
  it reduces the swapCar action
`, () => {
  const action = ThreeState.swapCar()
  const state = ThreeState.reducer(undefined, action)

  expect(state).toEqual({
    brand: 'Tesla',
    type: 'Model S',
    year: 2020,
    isUsed: false,
  })
})
