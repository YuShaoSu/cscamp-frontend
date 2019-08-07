
import { createActions } from 'redux-actions'
import apiServer from 'api/Actions/Server'
import { FETCHING_STATUS } from 'utilities/constants'

export const actions = createActions({
  USER: {
    AUTH: {
      LOGIN: null,
      LOGOUT: null,
      SET_STATUS: null
    }
  }
})

export const login = (data) => dispatch => {
  dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FETCHING))
  apiServer
    .post('/api/auth/v1/login', data)
    .then(({ data: user }) => {
      dispatch(actions.user.auth.login(user))
      dispatch(actions.user.auth.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FAIL)))
}
