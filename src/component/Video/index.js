import React, {Component} from 'react'
import MyVid from '../../Videos/intro.mp4'
import './style.css'

const Video = () => {
    return(
        <video className='background-video' loop autoPlay muted width='100%'>
            <source src={MyVid} type="video/mp4" />
        </video>
    )
}

// class Video extends Component {
//     constructor(props){
//         super(props)
        
//         this.state = {
//             videoURL: "../../../public/Videos/intro.mp4"
//         }
//     }

//     render(){
//         return(
//             <video loop autoPlay>
//                 <source src={this.state.videoURL} type="video/mp4" />
//             </video>
//         )
//     }
// }

export default Video