
import React from 'react'
import Layout from 'components/Layout'
import PerformanceVideo from 'components/PerformanceVideo'

class NightShow extends React.Component {
  render () {
    return (
      <Layout>
        <PerformanceVideo
          title='女舞'
          src='https://www.youtube.com/embed/7MNH9CAlzx8'
        />
        <PerformanceVideo
          title='Popping'
          src='https://www.youtube.com/embed/jhmV1M4XCzs'
        />
      </Layout>
    )
  }
}

export default NightShow
