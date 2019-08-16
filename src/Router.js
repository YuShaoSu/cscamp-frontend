
import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from 'pages/Home'
import Login from 'pages/Login'
import LookBack from 'pages/LookBack'
import NightShow from 'pages/NightShow'
import CampFire from 'pages/CampFire'
import Course from 'pages/Course'
import autoLogout from 'components/AutoLogout'
import { getStorage } from 'api/Actions/User'

class Router extends React.Component {
  constructor (props) {
    super(props)
    this.loginOnly = this.loginOnly.bind(this)
    this.props.getStorage()
  }

  loginOnly (Component) {
    const storage = window.sessionStorage
    const user = storage.getItem('user')
    if (user) {
      return () => <Component />
    } else {
      return () => (
        <Redirect
          to={{
            pathname: '/login',
            state: { redirected: true }
          }}
        />
      )
    }
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/look_back' component={this.loginOnly(autoLogout(LookBack))} />
          <Route path='/night_show' component={this.loginOnly(autoLogout(NightShow))} />
          <Route path='/camp_fire' component={this.loginOnly(autoLogout(CampFire))} />
          <Route path='/course' component={this.loginOnly(autoLogout(Course))} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  getStorage: () => dispatch(getStorage())
})

export default connect(mapStateToProps, mapDispatchToProps)(Router)
