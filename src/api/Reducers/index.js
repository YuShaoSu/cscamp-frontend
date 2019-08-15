
import { combineReducers } from 'redux'
import user from './User'
import lookBack from './LookBack'
import course from './Course'

export default combineReducers({
  user,
  lookBack,
  course
})
