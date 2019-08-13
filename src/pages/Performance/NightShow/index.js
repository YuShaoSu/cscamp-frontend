
import React from 'react'
import Layout from 'components/Layout'
import YoutubeVideo from 'components/YoutubeVideo'

class NightShow extends React.Component {
  render () {
    const videos = [
      {
        title: 'locking',
        url: 'https://www.youtube.com/embed/fykJn-Mh_vI'
      },
      {
        title: '我的瘦身 失敗',
        url: 'https://www.youtube.com/embed/vDOiMtfO-NY'
      },
      {
        title: '當個嘻哈囝',
        url: 'https://www.youtube.com/embed/54sNVLa38cI'
      },
      {
        title: '你媽一番鮮',
        url: 'https://www.youtube.com/embed/AOujKaqMziw'
      },
      {
        title: '笑話一籮筐',
        url: 'https://www.youtube.com/embed/A4qqgjN6siw'
      },
      {
        title: '凱文凱勒',
        url: 'https://www.youtube.com/embed/LC3oOaTvh4Y'
      },
      {
        title: '台灣水電工',
        url: 'https://www.youtube.com/embed/6IG3oTBPNho'
      }
    ]

    return (
      <Layout>
        <div className='row justify-content-center'>
          {
            videos.map((video, index) => (
              <div className='col-12 col-md-10 col-lg-8 my-4 my-md-5' key={video.title}>
                <YoutubeVideo
                  title={video.title}
                  src={video.url}
                />
              </div>
            ))
          }
        </div>
      </Layout>
    )
  }
}

export default NightShow
