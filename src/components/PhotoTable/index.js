
import React from 'react'
import styles from './style.module.scss'

const PhotoLeft = (props) => (
  <React.Fragment>
    <div className={`col-6 border-right border-dark ${styles.vcenter}`}>
      <div className='pull-right mx-3 mx-lg-4 mx-xl-5 py-3'>
        <img
          width='100%'
          src={props.image}
          alt='無法載入圖片'
        />
      </div>
    </div>
    <div className={`col-6 ${styles.vcenter}`}>
      <div className='pull-left mx-3 mx-lg-4 mx-xl-5 py-3'>
        <div>{ props.text }</div>
      </div>
    </div>
  </React.Fragment>
)

const PhotoRight = (props) => (
  <React.Fragment>
    <div className={`col-6 border-right border-dark ${styles.vcenter}`}>
      <div className='pull-right mx-3 mx-lg-4 mx-xl-5 py-3'>
        <div>{ props.text }</div>
      </div>
    </div>
    <div className={`col-6 ${styles.vcenter}`}>
      <div className='pull-left mx-3 mx-lg-4 mx-xl-5 py-3'>
        <img
          width='100%'
          src={props.image}
          alt='無法載入圖片'
        />
      </div>
    </div>
  </React.Fragment>
)

// for small screen size
const PhotoUp = (props) => (
  <React.Fragment>
    <div className='col-11 col-sm-10 col-md-8 mt-3'>
      <div className='mx-3 mx-lg-4 mx-xl-5 py-3'>
        <img
          width='100%'
          src={props.image}
          alt='無法載入圖片'
        />
      </div>
    </div>
    <div className='col-11 col-sm-10 col-md-8 mb-3'>
      <div className='mx-3 mx-lg-4 mx-xl-5 py-sm-3'>
        <div className='px-1'>{ props.text }</div>
      </div>
    </div>
  </React.Fragment>
)

const PhotoTable = (props) => {
  const days = ['', '第一天', '第二天', '第三天', '第四天', '第五天', '第六天']

  return (
    <div>
      <div className='row justify-content-center my-4 my-lg-5'>
        <div className='col-11 col-sm-10'>
          <div className={`${styles.day} mx-3`}>
            <span>{ days[props.day] }</span>
          </div>
        </div>
      </div>
      <div className={`row row-eq-height d-none d-md-flex my-3 ${styles.description}`}>
        {
          props.photos.map((photo, index) => {
            return (index % 2 === 0)
              ? <PhotoLeft
                key={index}
                image={photo.image}
                text={photo.text}
              />
              : <PhotoRight
                key={index}
                image={photo.image}
                text={photo.text}
              />
          })
        }
      </div>
      <div className={`row justify-content-center d-md-none my-3 ${styles.description}`}>
        {
          props.photos.map((photo, index) => (
            <PhotoUp
              key={index}
              image={photo.image}
              text={photo.text}
            />
          ))
        }
      </div>
    </div>
  )
}

export { PhotoTable, PhotoUp }
