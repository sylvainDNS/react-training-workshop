import { createSlice } from '@reduxjs/toolkit'

export const INITIAL_STATE = {
  brand: 'Simca',
  type: '1000 Rallye 2',
  year: 1978,
  isUsed: true,
}

const slice = createSlice({
  name: 'three',
  initialState: INITIAL_STATE,
  reducers: {
    swapCar: state => ({
      ...state,
      brand: 'Tesla',
      type: 'Model S',
      year: 2020,
      isUsed: false,
    }),
  },
})

export const { reducer } = slice
export const { swapCar } = slice.actions
export const select = {
  brand: state => state.three.brand,
  type: state => state.three.type,
  year: state => state.three.year,
  isUsed: state => state.three.isUsed,
}
