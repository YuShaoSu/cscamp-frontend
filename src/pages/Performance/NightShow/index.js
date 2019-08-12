
import React from 'react'
import Layout from 'components/Layout'
import YoutubeVideo from 'components/YoutubeVideo'

class NightShow extends React.Component {
  render () {
    return (
      <Layout>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10 col-lg-8 my-4 my-md-5'>
            <YoutubeVideo
              title='女舞'
              src='https://www.youtube.com/embed/7MNH9CAlzx8'
            />
          </div>
          <div className='col-12 col-md-10 col-lg-8 my-4 my-md-5'>
            <YoutubeVideo
              title='Popping'
              src='https://www.youtube.com/embed/jhmV1M4XCzs'
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default NightShow
