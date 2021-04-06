import { createSlice } from '@reduxjs/toolkit'

export const INITIAL_STATE = { message: "What's happening this week?" }

const slice = createSlice({
  name: 'four',
  initialState: INITIAL_STATE,
  reducers: {
    setMessage: (state, { payload: message }) => ({
      ...state,
      message,
    }),
  },
})

export const { reducer } = slice
export const { setMessage } = slice.actions
export const select = {
  message: state => state.four.message,
}
