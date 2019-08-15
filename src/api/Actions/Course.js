
import { createActions } from 'redux-actions'
import apiServer from 'api/Actions/Server'
import { FETCHING_STATUS } from 'utilities/constants'

export const actions = createActions({
  COURSE: {
    STORE: null,
    SET_STATUS: null
  }
})

export const getCourse = (payload) => dispatch => {
  console.log(payload)
  dispatch(actions.course.setStatus(FETCHING_STATUS.FETCHING))
  apiServer
    .post('/api/look_back/v1/getCourse', payload)
    .then(({ data: response }) => {
      console.log(response)
      dispatch(actions.course.store(response.data))
      dispatch(actions.course.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.course.setStatus(FETCHING_STATUS.FAIL)))
}
