
import React from 'react'
import { connect } from 'react-redux'
import Layout from 'components/Layout'
import { LookBackTable, MediaCard } from 'components/LookBackTable'
import { getPoster, getLookBackMedia } from 'api/Actions/LookBack'
import styles from './style.module.scss'

class LookBack extends React.Component {
  componentDidMount () {
    this.props.getPoster({
      guid: this.props.currentUser.guid
    })

    this.props.getLookBackMedia({
      guid: this.props.currentUser.guid
    })
  }

  render () {
    const { poster, media } = this.props
    let mediaSum = Array(2).fill(0)

    // calculate accumulated number of media of every day
    Object.keys(media)
      .map((day, index) => (media[day].length))
      .reduce((a, b, i) => { return mediaSum[i + 2] = a + b }, 0)
    console.log(mediaSum)

    return (
      <Layout>
        <div className={`row justify-content-center my-3 ${styles.description}`}>
          <MediaCard
            media={<img width='100%' src={poster.url} alt='無法載入圖片' />}
            text={poster.text}
          />
        </div>
        {
          Object.keys(media).map((day, index) => (
            <LookBackTable
              key={day}
              day={day}
              data={media[day]}
              mediaSum={mediaSum[day]}
            />
          ))
        }
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  poster: state.lookBack.poster.data,
  media: state.lookBack.media.data,
  currentUser: state.user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  getPoster: (payload) => dispatch(getPoster(payload)),
  getLookBackMedia: (payload) => dispatch(getLookBackMedia(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(LookBack)
