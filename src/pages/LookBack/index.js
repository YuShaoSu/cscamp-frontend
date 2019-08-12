
import React from 'react'
import { connect } from 'react-redux'
import Layout from 'components/Layout'
import { LookBackTable, MediaCard } from 'components/LookBackTable'
import { getLookBackMedia } from 'api/Actions/LookBack'
import styles from './style.module.scss'

class LookBack extends React.Component {
  componentDidMount () {
    this.props.getLookBackMedia({
      guid: this.props.currentUser.guid
    })
  }

  render () {
    const { data } = this.props
    let mediaSum = Array(2).fill(0)

    // calculate accumulated number of media of every day
    Object.keys(data)
      .map((day, index) => (data[day].length))
      .reduce((a, b, i) => { return mediaSum[i + 2] = a + b }, 0)
    console.log(mediaSum)

    return (
      <Layout>
        <div className={`row justify-content-center my-3 ${styles.description}`}>
          <MediaCard
            media={<img width='100%' src='http://cscamp.csunion.nctu.me:10010/static/83956faf-d44e-4162-9f28-82c9db2a145d.png' alt='無法載入圖片' />}
            text='雖然無法再回到那美好的時光，但彼此相處過的點點滴滴，會化作珍貴的回憶存在你我的心中，謝謝你們一起參與今年的逐夢營，很開心結識了這麼多可愛的隊員，也希望你們在這營隊中能獲得追逐夢想的勇氣。'
          />
        </div>
        {
          Object.keys(data).map((day, index) => (
            <LookBackTable
              key={day}
              day={day}
              data={data[day]}
              mediaSum={mediaSum[day]}
            />
          ))
        }
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.lookBack.data,
  currentUser: state.user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  getLookBackMedia: (payload) => dispatch(getLookBackMedia(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(LookBack)
