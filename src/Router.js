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
import AutoLogout from 'components/AutoLogout'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={AutoLogout(Login)} />
        <Route path='/look_back' component={AutoLogout(LookBack)} />
        <Route path='/performance/night_show' component={AutoLogout(Performance.NightShow)} />
        <Route path='/performance/camp_fire' component={AutoLogout(Performance.CampFire)} />
        <Route path='/performance/dance_party' component={AutoLogout(Performance.DanceParty)} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
