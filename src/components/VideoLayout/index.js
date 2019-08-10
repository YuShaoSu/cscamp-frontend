import React from 'react'
import Video from 'components/Video'

const VideoLayout = (props) => (
  <div className='container-fluid bg-black'>
    <Video />
    { props.children }
  </div>
)

export default VideoLayout
