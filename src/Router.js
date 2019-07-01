import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import Login from './page/Login'
import Home from './page/Home'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                {/* index and login page */}
                <Route exact path='/' component={Home}></Route>
                <Route path='/login' component={Login}></Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router