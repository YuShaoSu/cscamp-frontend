import React from 'react'
import VideoLayout from 'components/VideoLayout'
import styles from './style.module.css'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      passwd: ''
    }
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePasswd = this.handlePasswd.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsername (event) {
    this.setState({ username: event.target.value })
  }

  handlePasswd (event) {
    this.setState({ passwd: event.target.value })
  }

  handleSubmit (event) {
    // window.alert('username: ' + this.state.username + '\npasswd: ' + this.state.passwd)
    // event.preventDefault()
    // fetch(process.env.SERVER_URL, {
    //   method: 'POST',
    //   body: JSON.stringify({ username: this.state.username, passwd: this.state.passwd }),
    //   headers: { 'Content-Type': 'application/json' }
    // }).then(res => {
    //   // authentication part
    //   console.log(res)
    // })
  }

  render () {
    return (
      <VideoLayout>
        <div className={styles.loginForm}>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <div className='row'>
                <label className='col-12'>帳號:</label>
                <div className='col-12'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='姓名(例如：王大明)'
                    value={this.state.username}
                    onChange={this.handleUsername}
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
                    placeholder='身分證字號(例如：A123456789)'
                    value={this.state.passwd}
                    onChange={this.handlePasswd}
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

export default Login
