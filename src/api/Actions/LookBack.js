
import { createActions } from 'redux-actions'
import apiServer from 'api/Actions/Server'
import { FETCHING_STATUS } from 'utilities/constants'

export const actions = createActions({
  LOOK_BACK: {
    STORE: null,
    SET_STATUS: null
  }
})

export const getLookBackMedia = (payload) => dispatch => {
  dispatch(actions.lookBack.setStatus(FETCHING_STATUS.FETCHING))
  apiServer
    .post('/api/look_back/v1/getAllDays', payload)
    .then(({ data: response }) => {
      console.log(response)
      dispatch(actions.lookBack.store(response.data))
      dispatch(actions.lookBack.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.lookBack.setStatus(FETCHING_STATUS.FAIL)))
}
