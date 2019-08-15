
import React from 'react'

const YoutubeVideo = (props) => (
  <div className='embed-responsive embed-responsive-16by9'>
    <iframe
      className='embed-responsive-item'
      title={props.title}
      src={props.src + '?rel=0'}
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  </div>
)

export default YoutubeVideo
