
import React from 'react'
import Layout from 'components/Layout'
import YoutubeVideo from 'components/YoutubeVideo'

class CampFire extends React.Component {
  render () {
    return (
      <Layout>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10 col-lg-8 my-4 my-md-5'>
            <YoutubeVideo
              title='蛇舞(視角二)'
              src='https://www.youtube.com/embed/xb5C10nWBYo'
            />
          </div>
          <div className='col-12 col-md-10 col-lg-8 my-4 my-md-5'>
            <YoutubeVideo
              title='光球(視角一)'
              src='https://www.youtube.com/embed/4N440EYcweQ'
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default CampFire
