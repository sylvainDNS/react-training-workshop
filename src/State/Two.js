import { createSlice } from '@reduxjs/toolkit'

export const INITIAL_STATE = { activeUser: 'Louise' }

const slice = createSlice({
  name: 'two',
  initialState: INITIAL_STATE,
  reducers: {
    changeUser: state => ({ ...state, activeUser: 'Michel' }),
  },
})

export const { reducer } = slice
export const { changeUser } = slice.actions
export const select = {
  activeUser: state => state.two.activeUser,
}
