
import React from 'react'
import Fade from 'react-reveal/Fade'

const YoutubeVideo = (props) => (
  <div className='embed-responsive embed-responsive-16by9'>
  <Fade bottom>
    <iframe
      className='embed-responsive-item'
      title={props.title}
      src={props.src + '?rel=0'}
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
    </Fade>
  </div>
)

export default YoutubeVideo
