import React from 'react'
import MyVid from 'assets/videos/intro.mp4'
import styles from './style.module.scss'

const Video = () => {
  return (
    <video className={styles.backgroundVideo} loop autoPlay muted width='100%'>
      <source src={MyVid} type='video/mp4' />
    </video>
  )
}

export default Video
