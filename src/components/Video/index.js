import React from 'react'
import MyVid from 'assets/videos/intro_background.mp4'
import styles from './style.module.scss'

const Video = () => {
  return (
    <video className={styles.backgroundVideo} loop autoPlay muted>
      <source src={MyVid} type='video/mp4' />
    </video>
  )
}

export default Video
