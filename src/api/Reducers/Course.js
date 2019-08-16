
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  data: {
  	course: [],
  	summary: ''
  },
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  COURSE: {
    STORE: (state, action) => ({ ...state, data: action.payload }),
    SET_STATUS: (state, action) => ({ ...state, status: action.payload })
  }
}, initialState)
