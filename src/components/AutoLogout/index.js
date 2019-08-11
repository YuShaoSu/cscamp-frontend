
import React from 'react'

const AutoLogout = (WrappedComponent) => (
  class extends React.Component {
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

      if (window.location.pathname !== '/') {
        events.forEach(event => {
          window.addEventListener(event, this.resetTimer)
        })
        this.setTimer()
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
      window.location.assign('/')
    }

    render () {
      return (
        <WrappedComponent { ...this.props } />
      )
    }
  }
)

export default AutoLogout
