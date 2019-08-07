import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
  // withRouter
} from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Login from 'pages/Login'
import Home from 'pages/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* index and login page */}
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router

// const Router = ({location}) => {
//     return(
//         <div className='routing-transition'>
//             <TransitionGroup>
//                 <CSSTransition
//                 key={location.key}
//                 timeout={300}
//                 classNames={'fade'}
//                 >
//                     {/* <section className="route-section"> */}
//                         <Switch location={location}>
//                             {/* index and login page */}
//                             <Route exact path='/' component={Home} />
//                             <Route path='/login' component={Login} />
//                         </Switch>
//                     {/* </section> */}
//                 </CSSTransition>
//             </TransitionGroup>
//         </div>
//     )
// }
