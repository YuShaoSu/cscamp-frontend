import React from 'react'
import { Link } from 'react-router-dom'
import Video from 'components/Video'
import Poster from 'assets/images/poster.png'
import styles from './style.module.css'

const Home = () => {
  return (
    <div className='container'>
      <Video />
      <img className={styles.posterHeader} src={Poster} alt='header' />
      <svg width='100%' height='100%' className='sline-container'>
        {/* <path d="M275,200 v-150" className="sline" /> */}
        <line x1='350' y1='100' x2='350' y2='155' className='sline' />
      </svg>
      <p className={styles.introPara}>
        那年夏天，與你一起交資的夢 <br />
        在這裡紀念， <br />
        在各自的未來續寫。 <br />
      </p>
      <div className={styles.loginLink}>
        <Link to='/login'>login</Link>
      </div>
    </div>
  )
}

export default Home
