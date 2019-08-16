
import { handleActions } from 'redux-actions'
import { FETCHING_STATUS } from 'utilities/constants'

const initialState = {
  poster: {
    data: {
      url: '',
      text: ''
    },
    status: FETCHING_STATUS.IDLE
  },
  media: {
    data: {},
    status: FETCHING_STATUS.IDLE
  }
}

export default handleActions({
  LOOK_BACK: {
    POSTER: {
      STORE: (state, action) => ({ ...state,
        poster: {
          ...state.poster,
          data: action.payload
        } }),
      SET_STATUS: (state, action) => ({ ...state,
        poster: {
          ...state.poster,
          status: action.payload
        } })
    },
    MEDIA: {
      STORE: (state, action) => ({ ...state,
        media: {
          ...state.media,
          data: action.payload
        } }),
      SET_STATUS: (state, action) => ({ ...state,
        media: {
          ...state.media,
          status: action.payload
        } })
    }
  }
}, initialState)
