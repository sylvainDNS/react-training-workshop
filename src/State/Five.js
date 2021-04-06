import { createSlice } from '@reduxjs/toolkit'

export const INITIAL_STATE = {
  showLittle: true,
}

const slice = createSlice({
  name: 'five',
  initialState: INITIAL_STATE,
  reducers: {
    toggleLittle: state => ({ ...state, showLittle: !state.showLittle }),
  },
})

export const { reducer } = slice
export const { toggleLittle } = slice.actions
export const select = {
  showLittle: state => state.five.showLittle,
}
