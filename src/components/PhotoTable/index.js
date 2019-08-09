
import React from 'react'
import styles from './style.module.scss'

const PhotoLeft = (props) => (
  <React.Fragment>
    <div className={`col-6 border-right border-dark ${styles.vcenter}`}>
      <div className='pull-right mx-5 py-3'>
        <img
          width='100%'
          src={props.image}
          alt='無法載入圖片'
        />
      </div>
    </div>
    <div className={`col-6 ${styles.vcenter}`}>
      <div className='pull-left mx-5 py-3'>
        <div>{ props.text }</div>
      </div>
    </div>
  </React.Fragment>
)

const PhotoRight = (props) => (
  <React.Fragment>
    <div className={`col-6 border-right border-dark ${styles.vcenter}`}>
      <div className='pull-right mx-5 py-3'>
        <div>{ props.text }</div>
      </div>
    </div>
    <div className={`col-6 ${styles.vcenter}`}>
      <div className='pull-left mx-5 py-3'>
        <img
          width='100%'
          src={props.image}
          alt='無法載入圖片'
        />
      </div>
    </div>
  </React.Fragment>
)

const PhotoTable = (props) => {
  const days = ['', '第一天', '第二天', '第三天', '第四天', '第五天', '第六天']

  return (
    <div>
      <div className='row my-5'>
        <div className='col-12'>
          <div className={`${styles.day}`}>
            { days[props.day] }
          </div>
        </div>
      </div>
      <div className={`row row-eq-height my-3 ${styles.description}`}>
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
    </div>
  )
}

export default PhotoTable
