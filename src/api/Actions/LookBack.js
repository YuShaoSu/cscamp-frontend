
import { createActions } from 'redux-actions'
import apiServer from 'api/Actions/Server'
import { FETCHING_STATUS } from 'utilities/constants'

export const actions = createActions({
  LOOK_BACK: {
    POSTER: {
      STORE: null,
      SET_STATUS: null
    },
    MEDIA: {
      STORE: null,
      SET_STATUS: null
    }
  }
})

export const getPoster = (payload) => dispatch => {
  dispatch(actions.lookBack.poster.setStatus(FETCHING_STATUS.FETCHING))
  apiServer
    .post('/look_back/v1/getPoster', payload)
    .then(({ data: response }) => {
      dispatch(actions.lookBack.poster.store(response.data))
      dispatch(actions.lookBack.poster.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.lookBack.poster.setStatus(FETCHING_STATUS.FAIL)))
}

export const getLookBackMedia = (payload) => dispatch => {
  dispatch(actions.lookBack.media.setStatus(FETCHING_STATUS.FETCHING))
  apiServer
    .post('/look_back/v1/getAllDays', payload)
    .then(({ data: response }) => {
      dispatch(actions.lookBack.media.store(response.data))
      dispatch(actions.lookBack.media.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.lookBack.media.setStatus(FETCHING_STATUS.FAIL)))
}
