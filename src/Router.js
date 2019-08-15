import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Home from 'pages/Home'
import Login from 'pages/Login'
import LookBack from 'pages/LookBack'
import * as Performance from 'pages/Performance'
import Course from 'pages/Course'
import autoLogout from 'components/AutoLogout'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/look_back' component={autoLogout(LookBack)} />
        <Route path='/performance/night_show' component={autoLogout(Performance.NightShow)} />
        <Route path='/performance/camp_fire' component={autoLogout(Performance.CampFire)} />
        <Route path='/course' component={autoLogout(Course)} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
