import { createSlice } from '@reduxjs/toolkit'

export const INITIAL_STATE = {
  count: 0,
}

const slice = createSlice({
  name: 'one',
  initialState: INITIAL_STATE,
  reducers: {
    increase: state => ({ ...state, count: state.count + 1 }),
  },
})

export const { reducer } = slice
export const { increase } = slice.actions
export const select = {
  count: state => state.one.count,
}
