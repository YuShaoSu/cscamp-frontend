
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
import * as Performance from 'pages/Performance'
import Course from 'pages/Course'
import autoLogout from 'components/AutoLogout'

const Router = (props) => {
  const loginOnly = (Component) => {
    if (props.currentUser) {
      return () => <Component />
    }
    else {
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

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/look_back' component={loginOnly(autoLogout(LookBack))} />
        <Route path='/performance/night_show' component={autoLogout(Performance.NightShow)} />
        <Route path='/performance/camp_fire' component={autoLogout(Performance.CampFire)} />
        <Route path='/course' component={autoLogout(Course)} />
      </Switch>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Router)
