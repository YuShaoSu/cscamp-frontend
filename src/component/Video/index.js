import React from 'react'
import MyVid from '../../Videos/intro.mp4'
import './style.css'

const Video = () => {
    return(
        <video className='background-video' loop autoPlay muted width='100%'>
            <source src={MyVid} type="video/mp4" />
        </video>
    )
}

export default Video