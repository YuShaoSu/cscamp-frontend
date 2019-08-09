import React from 'react'
import { connect } from 'react-redux'
import VideoLayout from 'components/VideoLayout'
import { login } from 'api/Actions/User'
import { sha512 } from 'utilities'
import styles from './style.module.css'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      personal_id: '',
      password: '',
    }
    this.handlePersonalID = this.handlePersonalID.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidUpdate () {
    // 登入成功，跳轉頁面
    if (this.props.currentUser) {
      this.props.history.push('/look_back')
    }
  }

  handlePersonalID (event) {
    this.setState({ personal_id: event.target.value })
  }

  handlePassword (event) {
    this.setState({ password: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    let payload = { ...this.state }
    if (payload.personal_id !== 'admin' || payload.password !== 'admin') {
      payload = {
        personal_id: sha512(payload.personal_id),
        password: sha512(payload.password)
      }
    }
    this.props.login(payload)
  }

  render () {
    return (
      <VideoLayout>
        <div className={styles.loginForm}>
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
                <label className='col-12'>密碼:</label>
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
              <button className='btn-sm btn-light' type='submit'>登入</button>
            </div>
            <div className={styles.contact}>
              遇到問題嗎？
              <a href='https://www.facebook.com/nctucsChaseDream/'>聯絡我們</a>
            </div>
          </form>
        </div>
      </VideoLayout>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
