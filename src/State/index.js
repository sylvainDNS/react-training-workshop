import { combineReducers } from '@reduxjs/toolkit'
import { reducer as oneReducer } from './One'
import { reducer as twoReducer } from './Two'
import { reducer as threeReducer } from './Three'
import { reducer as fourReducer } from './Four'
import { reducer as fiveReducer } from './Five'
import { reducer as sixReducer } from './Six'

const rootReducer = combineReducers({
  one: oneReducer,
  two: twoReducer,
  three: threeReducer,
  four: fourReducer,
  five: fiveReducer,
  six: sixReducer,
})

export default rootReducer
