
import React from 'react'
import Layout from 'components/Layout'
import PerformanceVideo from 'components/PerformanceVideo'

class CampFire extends React.Component {
  render () {
    return (
      <Layout>
        <PerformanceVideo
          title='蛇舞(視角二)'
          src='https://www.youtube.com/embed/xb5C10nWBYo'
        />
        <PerformanceVideo
          title='光球(視角一)'
          src='https://www.youtube.com/embed/4N440EYcweQ'
        />
      </Layout>
    )
  }
}

export default CampFire
