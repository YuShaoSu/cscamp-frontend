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

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/look_back' component={LookBack} />
        <Route path='/performance/night_show' component={Performance.NightShow} />
        <Route path='/performance/camp_fire' component={Performance.CampFire} />
        <Route path='/performance/dance_party' component={Performance.DanceParty} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
