import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './State'

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  })

export default createStore()
