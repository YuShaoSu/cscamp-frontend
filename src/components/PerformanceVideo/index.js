
import React from 'react'

const PerformanceVideo = (props) => (
  <div className='row justify-content-center my-5 py-5'>
    <iframe
      title={props.title}
      width='800'
      height='450'
      src={props.src + '?rel=0'}
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  </div>
)

export default PerformanceVideo
