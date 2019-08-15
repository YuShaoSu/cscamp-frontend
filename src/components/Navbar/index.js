
import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
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
        className='nav-item dropdown'
        onMouseOver={() => this.setState({ open: true })}
        onMouseLeave={() => this.setState({ open: false })}
      >
        <div className='dropdown-toggle nav-link py-0'>
          { this.props.title }
        </div>
        <div className={`dropdown-menu m-0 p-0 ${this.state.open && 'show'}`}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

const SidebarLink = (props) => (
  <NavLink
    className={`mx-sm-4 ${styles.sidebarItem}`} 
    activeClassName='text-black'
    to={props.to}
  >
    { props.children }
  </NavLink>
)

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({ open: !this.state.open })
  }

  render () {
    const { currentUser } = this.props

    return (
      <div>
        <div className={`${styles.wrapper}`}>
          <div className={`${styles.sidebar}`}>
            <SidebarLink to='/look_back'>Look Back</SidebarLink>
            <SidebarLink to='/performance/night_show'>Night Show</SidebarLink>
            <SidebarLink to='/performance/camp_fire'>Camp Fire</SidebarLink>
            <SidebarLink to='/course'>Course</SidebarLink>
          </div>

          {
            this.props.location.pathname === '/look_back' &&
            <div className={styles.sidebarHash}>
              <HashLink to="#Day1" className={`mx-4 ${styles.hashLink}`} smooth>Day1</HashLink>
              <br />
              <HashLink to="#Day2" className={`mx-4 ${styles.hashLink}`} smooth>Day2</HashLink>
              <br />
              <HashLink to="#Day3" className={`mx-4 ${styles.hashLink}`} smooth>Day3</HashLink>
              <br />
              <HashLink to="#Day4" className={`mx-4 ${styles.hashLink}`} smooth>Day4</HashLink>
              <br />
              <HashLink to="#Day5" className={`mx-4 ${styles.hashLink}`} smooth>Day5</HashLink>
              <br />
              <HashLink to="#Day6" className={`mx-4 ${styles.hashLink}`} smooth>Day6</HashLink>
            </div>
          }
        </div>

        {/* for mobile */}
        <nav className={`navbar navbar-light px-4 py-auto ${styles.navbar}`}>
          <button className='navbar-toggler px-2 py-1' onClick={this.handleClick}>
            <span className='navbar-toggler-icon' />
          </button>
          <div className={`collapse navbar-collapse ${this.state.open && styles.navbarCollapse}`}>
            <div className={`navbar-nav ${styles.navbarNav}`}>
              <Link className='nav-item nav-link py-0' to='/look_back'>Look Back</Link>
              <Link className='nav-item nav-link py-0' to='/performance/night_show'>Night Show</Link>
              <Link className='nav-item nav-link py-0' to='/performance/camp_fire'>Camp Fire</Link>
              <Link className='nav-item nav-link py-0' to='/course'>Course</Link>

              <NavDropdown className='mx-sm-3' title={currentUser && currentUser.name}>
                <div
                  className={`dropdown-item clickable ${styles.dropdownItem}`}
                  onClick={() => this.props.logout()}
                >
                  登出
                </div>
              </NavDropdown>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))
