
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from 'api/Actions/User'
import styles from './style.module.scss'

const NavDropdownLink = (props) => (
  <Link className={`dropdown-item ${styles.dropdownItem}`} to={props.to}>
    { props.children }
  </Link>
)

class NavDropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  render () {
    return (
      <div
        className={`nav-item dropdown mx-3 ${this.props.className}`}
        onMouseOver={() => this.setState({ open: true })}
        onMouseLeave={() => this.setState({ open: false })}
      >
        <div className='dropdown-toggle nav-link py-0'>{ this.props.title }</div>
        <div className={`dropdown-menu m-0 p-0 ${this.state.open && 'show'}`}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

const Navbar = (props) => (
  <nav className={`navbar navbar-expand-md navbar-light px-5 ${styles.navbar}`}>
    <div className={`navbar-brand mx-3 py-0 ${styles.navbarBrand}`}>你不資道的事</div>
    <div className='collapse navbar-collapse'>
      <div className={`navbar-nav ml-auto ${styles.navbarNav}`}>
        <Link className='nav-item nav-link mx-4 py-0' to='/look_back'>回憶</Link>
        <NavDropdown title='表演'>
          <NavDropdownLink to='/performance/night_show'>晚會</NavDropdownLink>
          <NavDropdownLink to='/performance/camp_fire'>營火</NavDropdownLink>
          <NavDropdownLink to='/performance/dance_party'>舞會</NavDropdownLink>
        </NavDropdown>
        <Link className='nav-item nav-link mx-4 py-0' to='/course'>課程</Link>

        <NavDropdown className='mx-5' title={props.currentUser && props.currentUser.name}>
          <div
            className={`dropdown-item clickable ${styles.dropdownItem}`}
            onClick={() => props.logout()}
          >
            登出
          </div>
        </NavDropdown>
      </div>
    </div>
  </nav>
)

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
