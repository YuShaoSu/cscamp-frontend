
import React from 'react'
import { connect } from 'react-redux'
import Layout from 'components/Layout'
import { PhotoTable, PhotoUp } from 'components/PhotoTable'
import { getLookBackPhotos } from 'api/Actions/LookBack'
import styles from './style.module.scss'

class LookBack extends React.Component {
  componentDidMount () {
    this.props.getLookBackPhotos({
      guid: this.props.currentUser.guid
    })
  }

  render () {
    return (
      <Layout>
        <div className={`row justify-content-center my-3 ${styles.description}`}>
          <PhotoUp
            image='http://cscamp.csunion.nctu.me:10010/static/83956faf-d44e-4162-9f28-82c9db2a145d.png'
            text='雖然無法再回到那美好的時光，但彼此相處過的點點滴滴，會化作珍貴的回憶存在你我的心中，謝謝你們一起參與今年的逐夢營，很開心結識了這麼多可愛的隊員，也希望你們在這營隊中能獲得追逐夢想的勇氣。'
          />
        </div>
        {
          Object.keys(this.props.data).map((day, index) => (
            <PhotoTable
              day={day}
              photos={this.props.data[day]}
              key={day}
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
  getLookBackPhotos: (payload) => dispatch(getLookBackPhotos(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(LookBack)
