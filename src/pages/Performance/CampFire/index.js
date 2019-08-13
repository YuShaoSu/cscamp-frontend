
import React from 'react'
import Layout from 'components/Layout'
import YoutubeVideo from 'components/YoutubeVideo'

class CampFire extends React.Component {
  render () {
    const videos = [
      {
        title: '拜火(視角1)',
        url: 'https://www.youtube.com/embed/A0Xh6eBuvhE'
      },
      {
        title: '拜火(視角2)',
        url: 'https://www.youtube.com/embed/bBoudapgqD8'
      },
      {
        title: '螢光(視角1)',
        url: 'https://www.youtube.com/embed/Q45-OuQWNZ0'
      },
      {
        title: '螢光(視角2)',
        url: 'https://www.youtube.com/embed/DA95yxl0mQw'
      },
      {
        title: '蛇舞(視角1)',
        url: 'https://www.youtube.com/embed/0JhP3Cc6LYw'
      },
      {
        title: '蛇舞(視角2)',
        url: 'https://www.youtube.com/embed/LM6_lWRnKXU'
      },
      {
        title: '光棍(視角1)',
        url: 'https://www.youtube.com/embed/xRKCKEPrweE'
      },
      {
        title: '光棍(視角2)',
        url: 'https://www.youtube.com/embed/gwM6PSjCp7E'
      },
      {
        title: 'poi(視角1)',
        url: 'https://www.youtube.com/embed/gi6YUONEliw'
      },
      {
        title: 'poi(視角2)',
        url: 'https://www.youtube.com/embed/Jld99W8HbO0'
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

export default CampFire
