
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from 'api/Actions/User'
import styles from './style.module.scss'

class Navbar extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-expand-md navbar-light bg-light border-bottom px-5'>
        <div className='navbar-brand'>你不資到的事</div>
        <div className='collapse navbar-collapse'>
          <div className='navbar-nav ml-auto px-5'>
            <Link className='nav-item nav-link' to='/memory'>回憶</Link>
            <Link className='nav-item nav-link mx-5' to='/performance'>表演</Link>
            <div
              className='nav-item nav-link clickable'
              onClick={() => this.props.logout()}
            >
              登出
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
