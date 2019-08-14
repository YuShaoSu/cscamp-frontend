
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
        className={`nav-item dropdown mx-sm-2 mx-md-3 ${this.props.className}`}
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
        <div className={`${styles.sidebar}`}>
          <button className='navbar-toggler px-2 py-1' onClick={this.handleClick}>
            <span className='navbar-toggler-icon' />
          </button>
            <NavLink className={`mx-sm-4 ${styles.sidebarItem}`} 
              activeClassName={`${styles.sidebarItemActive}`} to='/look_back'>Look Back</NavLink>
            <NavLink className={`mx-sm-4 ${styles.sidebarItem}`} 
              activeClassName={`${styles.sidebarItemActive}`} to='/performance/night_show'>Night Show</NavLink>
            <NavLink className={`mx-sm-4 ${styles.sidebarItem}`} 
              activeClassName={`${styles.sidebarItemActive}`} to='/performance/camp_fire'>Camp Fire</NavLink>
            <NavLink className={`mx-sm-4 ${styles.sidebarItem}`} 
              activeClassName={`${styles.sidebarItemActive}`} to='/course'>Course</NavLink>
          {/* <NavDropdown className='mx-sm-3 mx-md-5' title={currentUser && currentUser.name}>
            <div
              className={`dropdown-item clickable ${styles.dropdownItem}`}
              onClick={() => this.props.logout()}
            >
              登出
            </div>
          </NavDropdown> */}
          <HashLink smooth to="#Day1" className={`mx-sm-4 ${styles.sidebarHash}`}>Day1</HashLink>
          <HashLink smooth to="#Day2" className={`mx-sm-4 ${styles.sidebarHash}`}>Day2</HashLink>
          <HashLink smooth to="#Day3" className={`mx-sm-4 ${styles.sidebarHash}`}>Day3</HashLink>
          <HashLink smooth to="#Day4" className={`mx-sm-4 ${styles.sidebarHash}`}>Day4</HashLink>
          <HashLink smooth to="#Day5" className={`mx-sm-4 ${styles.sidebarHash}`}>Day5</HashLink>
          <HashLink smooth to="#Day6" className={`mx-sm-4 ${styles.sidebarHash}`}>Day6</HashLink>
        </div>

        <nav className={`navbar navbar-expand-sm navbar-light px-4 px-md-5 py-0 ${styles.navbar}`}>
          <button className='navbar-toggler px-2 py-1' onClick={this.handleClick}>
            <span className='navbar-toggler-icon' />
          </button>
          <div className={`collapse navbar-collapse ${this.state.open && styles.navbarCollapse}`}>
            <div className={`navbar-nav ml-auto ${styles.navbarNav}`}>
              <Link className='nav-item nav-link mx-sm-2 mx-md-4 py-0' to='/look_back'>回憶</Link>
              <NavDropdown title='表演'>
                <NavDropdownLink to='/performance/night_show'>晚會</NavDropdownLink>
                <NavDropdownLink to='/performance/camp_fire'>營火</NavDropdownLink>
              </NavDropdown>
              <Link className='nav-item nav-link mx-sm-2 mx-md-4 py-0' to='/course'>課程</Link>

              <NavDropdown className='mx-sm-3 mx-md-5' title={currentUser && currentUser.name}>
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
