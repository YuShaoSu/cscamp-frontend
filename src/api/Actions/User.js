
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

export const login = (payload) => dispatch => {
  dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FETCHING))
  apiServer
    .post('/api/auth/v1/login', payload)
    .then(({ data: response }) => {
      console.log(response)
      dispatch(actions.user.auth.login(response.data))
      dispatch(actions.user.auth.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FAIL)))
}

export const logout = () => dispatch => {
  dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FETCHING))
  apiServer
    .get('/api/auth/v1/logout')
    .then(({ data: response }) => {
      console.log(response)
      dispatch(actions.user.auth.logout())
      dispatch(actions.user.auth.setStatus(FETCHING_STATUS.DONE))
    })
    .catch(() => dispatch(actions.user.auth.setStatus(FETCHING_STATUS.FAIL)))
}