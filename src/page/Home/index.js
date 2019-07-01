import React from 'react'
// import logo from '../../logo.svg';
import './style.css';
import Video from '../../component/Video'
import Poster from '../../Images/poster.png'

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
            <a className="login-link" href='http://localhost:3000/login'>
                login
            </a>
        </div>
    )
}

export default Home

            // <h1>Test</h1>
            // <header className="App-header">
            // <img src={logo} className="App-logo" alt="logo" />
            // <p>
            //     Edit <code>src/App.js</code> and save to reload.
            // </p>
            // <a
            //     className="App-link"
            //     href="https://reactjs.org"
            //     target="_blank"
            //     rel="noopener noreferrer"
            // >
            //     Learn React
            // </a>
            // </header>