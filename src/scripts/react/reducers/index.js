import { combineReducers } from 'redux'
import subscriptionState from './subscription'
import login from './login.js'
import createAccount from './createAccount.js'

export default combineReducers({
  subscriptionState,
  login,
  createAccount
})
