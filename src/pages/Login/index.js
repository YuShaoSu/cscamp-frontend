
import React from 'react'
import { connect } from 'react-redux'
import VideoLayout from 'components/VideoLayout'
import { ToastWrapper, toast } from 'components/Toast'
import { login, clearStorage } from 'api/Actions/User'
import { sha512 } from 'utilities'
import { FETCHING_STATUS } from 'utilities/constants'
import styles from './style.module.scss'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      payload: {
        personal_id: '',
        password: ''
      },
      submitted: false
    }
    this.handlePersonalID = this.handlePersonalID.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const { state } = this.props.location

    // 沒登入被導入此頁
    if (state && state.redirected) {
      toast('請先登入，謝謝!', { type: 'warning' })

      // 清除 location state
      this.props.history.replace({
        pathname: '/login',
        state: {}
      })
    }
    this.props.clearStorage()
  }

  componentDidUpdate () {
    // 登入成功，跳轉頁面
    if (this.props.currentUser) {
      this.props.history.push('/look_back')
    }

    if (this.state.submitted && this.props.status === FETCHING_STATUS.FAIL) {
      toast('登入失敗', { type: 'warning' })
      this.setState({ submitted: false })
    }
  }

  handlePersonalID (event) {
    this.setState({
      payload: {
        ...this.state.payload,
        personal_id: event.target.value
      }
    })
  }

  handlePassword (event) {
    this.setState({
      payload: {
        ...this.state.payload,
        password: event.target.value
      }
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    let payload = { ...this.state.payload }
    if (payload.personal_id !== 'admin' || payload.password !== 'admin') {
      payload = {
        personal_id: sha512(payload.personal_id),
        password: sha512(payload.password)
      }
    }
    this.setState({ submitted: true })
    this.props.login(payload)
  }

  render () {
    return (
      <VideoLayout>
        <ToastWrapper />
        <div className={`${styles.loginForm}`}>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <div className='row'>
                <label className='col-12'>身分證字號:</label>
                <div className='col-12'>
                  <input
                    className='form-control'
                    type='password'
                    placeholder='範例：A123456789'
                    value={this.state.personal_id}
                    onChange={this.handlePersonalID}
                    required
                  />
                </div>
              </div>
            </div>

            <div className='form-group'>
              <div className='row'>
                <label className='col-12'>生日:</label>
                <div className='col-12'>
                  <input
                    className='form-control'
                    type='password'
                    placeholder='範例：19990101'
                    value={this.state.password}
                    onChange={this.handlePassword}
                    required
                  />
                </div>
              </div>
            </div>

            <div className='row justify-content-center my-4'>
              <button className='btn-sm btn-light px-xl-3 py-xl-2' type='submit'>登入</button>
            </div>
            <div className={styles.contact}>
              遇到問題嗎？
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com/nctucsChaseDream/'
              >
                聯絡我們
              </a>
            </div>
          </form>
        </div>
      </VideoLayout>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  status: state.user.status
})
const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
  clearStorage: () => dispatch(clearStorage())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
