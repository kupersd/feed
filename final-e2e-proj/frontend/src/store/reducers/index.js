import { combineReducers } from 'redux'
import { msgReducer } from './msgReducer'
import { userReducer } from './userReducer'
import { systemReducer } from './systemReducer'

export const rootReducer = combineReducers({
  systemModule: systemReducer,
  msgModule: msgReducer,
  userModule: userReducer
})
