import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import Home from 'pages/Home'
import Login from 'pages/Login'
import Memory from 'pages/Memory'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/look_back' component={Memory} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
