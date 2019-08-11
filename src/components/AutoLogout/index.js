
import React from 'react'
import { connect } from 'react-redux'
import { logout } from 'api/Actions/User'

class AutoLogout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      logoutTime: 1000 * 60 * 30 // auto logout after do nothing 30 min
    }
    this.setTimer = this.setTimer.bind(this)
    this.clearTimer = this.clearTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount () {
    const events = [
      'load',
      'mousemove',
      'mousedown',
      'click',
      'scroll',
      'keypress'
    ]

    events.forEach(event => {
      window.addEventListener(event, this.resetTimer)
    })
    this.setTimer()
  }

  componentDidUpdate () {
    if (!this.props.currentUser) {
      window.location.assign('/')
    }
  }

  setTimer () {
    this.timer = window.setTimeout(this.logout, this.state.logoutTime)
  }

  clearTimer () {
    window.clearTimeout(this.timer)
  }

  resetTimer () {
    this.clearTimer()
    this.setTimer()
  }

  logout () {
    this.props.logout()
  }

  render () {
    return (
      <React.Fragment>
        { this.props.children }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

const AutoLogoutWrapper = connect(mapStateToProps, mapDispatchToProps)(AutoLogout)

const autoLogout = (ChildrenComponent) => (() => (
  <AutoLogoutWrapper>
    <ChildrenComponent />
  </AutoLogoutWrapper>
))

export default autoLogout
