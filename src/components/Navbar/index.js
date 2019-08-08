
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from 'api/Actions/User'

class Navbar extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-expand-md navbar-light bg-light border-bottom px-5'>
        <div className='navbar-brand mx-3'>你不資道的事</div>
        <div className='collapse navbar-collapse'>
          <div className='navbar-nav ml-auto'>
            <Link className='nav-item nav-link mx-4' to='/look_back'>回憶</Link>
            <Link className='nav-item nav-link mx-4' to='/performance'>表演</Link>
            <Link className='nav-item nav-link mx-4' to='/course'>課程</Link>
            <div
              className='nav-item nav-link clickable mx-5'
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
