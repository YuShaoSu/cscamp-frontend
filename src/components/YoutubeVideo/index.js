
import React from 'react'
import styles from './style.module.scss'

const YoutubeVideo = (props) => (
  <div className={`embed-responsive embed-responsive-16by9 ${styles.video}`}>
    <iframe
      className={`embed-responsive-item`}
      title={props.title}
      src={props.src + '?rel=0'}
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  </div>
)

export default YoutubeVideo
