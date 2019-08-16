
import React from 'react'
import MyVid from 'assets/videos/intro_background.mp4'
import styles from './style.module.scss'

const Video = () => {
  return (
    <div className={styles.backgroundVideo}>
      <video loop autoPlay muted>
        <source src={MyVid} type='video/mp4' />
      </video>
    </div>
  )
}

export default Video
