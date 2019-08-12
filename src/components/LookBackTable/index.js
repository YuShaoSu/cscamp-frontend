
import React from 'react'
import YoutubeVideo from 'components/YoutubeVideo'
import styles from './style.module.scss'

// left and right
const MediaRow = (props) => (
  <React.Fragment>
    <div className={`col-6 border-right border-dark ${styles.vcenter}`}>
      <div className='pull-right mx-3 mx-lg-4 mx-xl-5 py-3'>
        { props.left }
      </div>
    </div>
    <div className={`col-6 ${styles.vcenter}`}>
      <div className='pull-left mx-3 mx-lg-4 mx-xl-5 py-3'>
        { props.right }
      </div>
    </div>
  </React.Fragment>
)

// up and down
const MediaCard = (props) => (
  <React.Fragment>
    <div className='col-11 col-sm-10 col-md-8 mt-3'>
      <div className='mx-3 mx-lg-4 mx-xl-5 py-3'>
        { props.media }
      </div>
    </div>
    <div className='col-11 col-sm-10 col-md-8 mb-3'>
      <div className='mx-3 mx-lg-4 mx-xl-5 py-sm-3'>
        <div className='px-1'>{ props.text }</div>
      </div>
    </div>
  </React.Fragment>
)

const LookBackTable = (props) => {
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
          props.data.map((data, index) => {
            const text = <div>{ data.text }</div>
            const media = (data.type === 'image')
              ? <img width='100%' src={data.url} alt='無法載入圖片' />
              : <YoutubeVideo src={data.url} title={data.text} />

            return ((props.mediaSum + index) % 2 === 0)
              ? <MediaRow key={index} left={media} right={text} />
              : <MediaRow key={index} left={text} right={media} />
          })
        }
      </div>
      <div className={`row justify-content-center d-md-none my-3 ${styles.description}`}>
        {
          props.data.map((data, index) => {
            const media = (data.type === 'image')
              ? <img width='100%' src={data.url} alt='無法載入圖片' />
              : <YoutubeVideo src={data.url} title={data.text} />
            
            return <MediaCard key={index} media={media} text={data.text} />
          })
        }
      </div>
    </div>
  )
}

export { LookBackTable, MediaCard }
