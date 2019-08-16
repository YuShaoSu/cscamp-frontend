
import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { logout } from 'api/Actions/User'
import styles from './style.module.scss'

// const NavDropdownLink = (props) => (
//   <Link className={`dropdown-item ${styles.dropdownItem}`} to={props.to}>
//     { props.children }
//   </Link>
// )

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
    this.state = {
      navbarOpen: false,
      logoutOpen: false
    }
  }

  render () {
    const { currentUser } = this.props

    return (
      <div>
        <div className={`${styles.wrapper}`}>
          <div className={`${styles.sidebar}`}>
            <SidebarLink to='/look_back'>Look Back</SidebarLink>
            <SidebarLink to='/night_show'>Night Show</SidebarLink>
            <SidebarLink to='/camp_fire'>Camp Fire</SidebarLink>
            <SidebarLink to='/course'>Course</SidebarLink>

            {/* username and logout for only sm */}
            <div
              className={`mx-sm-4 ${styles.smInfo}`}
              onMouseOver={() => this.setState({ logoutOpen: true })}
              onMouseLeave={() => this.setState({ logoutOpen: false })}
            >
              <span>{ currentUser && currentUser.name }</span>
              <span className={styles.triangle} />
              {
                this.state.logoutOpen &&
                <div className={styles.smLogout} onClick={() => this.props.logout()}>
                  logout
                </div>
              }
            </div>
          </div>

          {
            this.props.location.pathname === '/look_back' &&
            <div className={styles.sidebarHash}>
              <HashLink to='#Day1' className={`mx-4 ${styles.hashLink}`} smooth>Day1</HashLink>
              <br />
              <HashLink to='#Day2' className={`mx-4 ${styles.hashLink}`} smooth>Day2</HashLink>
              <br />
              <HashLink to='#Day3' className={`mx-4 ${styles.hashLink}`} smooth>Day3</HashLink>
              <br />
              <HashLink to='#Day4' className={`mx-4 ${styles.hashLink}`} smooth>Day4</HashLink>
              <br />
              <HashLink to='#Day5' className={`mx-4 ${styles.hashLink}`} smooth>Day5</HashLink>
              <br />
              <HashLink to='#Day6' className={`mx-4 ${styles.hashLink}`} smooth>Day6</HashLink>
            </div>
          }

          {/* username and logout for md and above */}
          <div
            className={styles.info}
            onMouseOver={() => this.setState({ logoutOpen: true })}
            onMouseLeave={() => this.setState({ logoutOpen: false })}
          >
            <span className='ml-3 mr-1'>{ currentUser && currentUser.name }</span>
            <span className={styles.triangle} />
            {
              this.state.logoutOpen &&
              <div className={styles.logout} onClick={() => this.props.logout()}>
                logout
              </div>
            }
          </div>
        </div>

        {/* navbar for xs */}
        <nav className={`navbar navbar-light px-4 py-auto ${styles.navbar}`}>
          <button
            className='navbar-toggler px-2 py-1'
            onClick={() => this.setState({ navbarOpen: !this.state.navbarOpen })}
          >
            <span className='navbar-toggler-icon' />
          </button>
          {
            this.state.navbarOpen &&
            <div className={`collapse navbar-collapse ${styles.navbarCollapse}`}>
              <div className={`navbar-nav ${styles.navbarNav}`}>
                <Link className='nav-item nav-link py-0' to='/look_back'>Look Back</Link>
                <Link className='nav-item nav-link py-0' to='/night_show'>Night Show</Link>
                <Link className='nav-item nav-link py-0' to='/camp_fire'>Camp Fire</Link>
                <Link className='nav-item nav-link py-0' to='/course'>Course</Link>

                <div className='mx-sm-3'>
                  {currentUser && currentUser.name}
                </div>

                {/* <NavDropdown className='mx-sm-3' title={currentUser && currentUser.name}>
                  <div
                    className={`dropdown-item ${styles.dropdownItem}`}
                    onClick={() => this.props.logout()}
                  >
                    logout
                  </div>
                </NavDropdown> */}
              </div>
            </div>
          }
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
