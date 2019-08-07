import React from 'react'
import { Link } from 'react-router-dom'
import VideoLayout from 'components/VideoLayout'
import Poster from 'assets/images/poster.png'
import styles from './style.module.scss'

const Home = () => {
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

export default Home
