
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  currentUser: {
    'guid': 'asdasds',
    'camp_year': 108,
    'name': '雞巴梁',
    'is_admin': 1
  },
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  USER: {
    AUTH: {
      LOGIN: (state, action) => ({ ...state, currentUser: action.payload }),
      LOGOUT: (state) => ({ ...state, currentUser: null }),
      SET_STATUS: (state, action) => ({ ...state, status: action.payload })
    }
  }
}, initialState)
