import * as SixState from './Six'

test(`
  it reduces to the initial state
  when no action is specified
`, () => {
  const state = SixState.reducer(undefined, {})

  expect(state).toEqual(SixState.INITIAL_STATE)
})

test(`
  it reduces the animesReceived action
`, () => {
  const action = SixState.animesReceived([
    { id: 1, title: 'BBBB' },
    { id: 0, title: 'AAAA' },
  ])
  const state = SixState.reducer(undefined, action)

  expect(state).toEqual({
    ids: [0, 1],
    entities: {
      0: { id: 0, title: 'AAAA' },
      1: { id: 1, title: 'BBBB' },
    },
    isLoading: false,
    error: null,
  })
})

test(`
  it reduces the failed action
`, () => {
  const error = Error('oh no :(')
  const action = SixState.failed(error.message)
  const state = SixState.reducer(undefined, action)

  expect(state).toEqual({
    ids: [],
    entities: {},
    isLoading: false,
    error: 'oh no :(',
  })
})

describe(`
  it selects sorted animes
  from state
`, () => {
  test(`
    it returns an empty array
    if no datas are provided
  `, () => {
    const state = { six: SixState.INITIAL_STATE }
    const animes = SixState.select.animes(state)
    const expected = []

    expect(animes).toEqual(expected)
  })

  test(`
    it returns animes
  `, () => {
    const action = SixState.animesReceived([
      { id: 1, title: 'BBBB' },
      { id: 0, title: 'AAAA' },
    ])
    const state = { six: SixState.reducer(undefined, action) }

    const animes = SixState.select.animes(state)
    const expected = [
      { id: 0, title: 'AAAA' },
      { id: 1, title: 'BBBB' },
    ]

    expect(animes).toEqual(expected)
  })
})
