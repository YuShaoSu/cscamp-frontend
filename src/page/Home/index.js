import React from 'react'
import { Link } from 'react-router-dom'
import Video from 'component/Video'
import Poster from 'assets/images/poster.png'
import './style.css'

const Home = () => {
    return(
        <div className="container">
            <Video />
            <img className="poster-header" src={Poster} alt="header" />
            <svg width="100%" height="100%" className="sline-container">
                {/* <path d="M275,200 v-150" className="sline" /> */}
                <line x1="350" y1="100" x2="350" y2="155" className="sline"/>
            </svg>
            <p className="intro-para">
                那年夏天，與你一起交資的夢 <br/>
                在這裡紀念， <br/>
                在各自的未來續寫。 <br/>
            </p>
            <div className="login-link">
                <Link className="login-link" to='/login'>login</Link>
            </div>
        </div>
    )
}

export default Home