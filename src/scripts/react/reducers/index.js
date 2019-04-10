import { combineReducers } from 'redux'
import subscriptionState from './subscription'
import login from './login.js'

export default combineReducers({
  subscriptionState,
  login
})
