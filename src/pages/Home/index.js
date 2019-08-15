
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VideoLayout from 'components/VideoLayout'
import { clearStorage } from 'api/Actions/User'
import Poster from 'assets/images/poster.png'
import styles from './style.module.scss'

class Home extends React.Component {
  componentDidMount () {
    this.props.clearStorage()
  }

  render () {
    return (
      <VideoLayout>
        <img className={styles.posterHeader} src={Poster} alt='header' />
        <p className={styles.introPara}>
          那年夏天，與你一起交資的夢 <br />
          在這裡紀念， <br />
          在各自的未來續寫。 <br />
        </p>
        <Link className={styles.loginLink} to='/login'>login</Link>
      </VideoLayout>
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
  clearStorage: () => dispatch(clearStorage())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
