import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

const animesAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.title.localeCompare(b.title),
})

export const INITIAL_STATE = animesAdapter.getInitialState({
  isLoading: true,
  error: null,
})

const slice = createSlice({
  name: 'six',
  initialState: INITIAL_STATE,
  reducers: {
    animesReceived: (state, { payload: animes }) =>
      animesAdapter.setAll({ ...state, isLoading: false }, animes),
    failed: (state, { payload: error }) => ({
      ...state,
      isLoading: false,
      error,
    }),
  },
})

export const { reducer } = slice
export const { animesReceived, failed } = slice.actions
export const select = {
  animes: ({ six: { ids, entities } }) => ids.map(id => entities[id]),
  isLoading: state => state.six.isLoading,
  error: state => state.six.error,
}
