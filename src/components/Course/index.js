
import React from 'react'
import styles from './style.module.scss'

const CourseCard = (props) => (
  <React.Fragment>
    <div className={`col-11 col-sm-10 col-md-6 col-lg-5 ${styles.vcenter}`}>
      <div className='mx-3 mx-lg-4 my-md-3 py-3'>
        <div className={styles.title}>{ props.title }</div>
        <div className={styles.text}>{ props.text }</div>
      </div>
    </div>
    <div className={`col-11 col-sm-10 col-md-6 col-lg-5 ${styles.vcenter}`}>
      <div className='mx-3 mx-lg-4 my-md-3 py-3'>
        <img src={props.image} alt='無法載入圖片' width='100%' />
      </div>
    </div>
  </React.Fragment>
)

const CourseText = (props) => (
  <div className='col-11 col-sm-10 col-md-12 col-lg-10 my-5'>
    <div className='mx-3 mx-lg-4 text-center'>
      <div className={styles.text}>{ props.text }</div>
      <a
        className={styles.link}
        target='_blank'
        rel='noopener noreferrer'
        href='https://drive.google.com/open?id=1RZngBADXut6sUQD0EdIBWRPzwkcCUkWa'
      >
        課程投影片
      </a>
    </div>
  </div>
)

export { CourseCard, CourseText }
