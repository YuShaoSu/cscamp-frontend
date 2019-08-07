import React from 'react'
import {
  Route,
  Switch
  // withRouter
} from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Login from 'page/Login'
import Home from 'page/Home'
import './index.css'

const Router = () => {
  return (
    <Switch>
      {/* index and login page */}
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
    </Switch>
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
