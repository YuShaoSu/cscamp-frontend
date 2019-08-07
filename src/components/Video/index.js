import React from 'react'
import MyVid from 'assets/videos/intro.mp4'
import styles from './style.module.css'

const Video = () => {
	console.log(styles)
  return (
    <video className={styles.backgroundVideo} loop autoPlay muted width='100%'>
      <source src={MyVid} type='video/mp4' />
    </video>
  )
}

export default Video
