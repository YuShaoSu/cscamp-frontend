
import React from 'react'
import { connect } from 'react-redux'
import Navbar from 'components/Navbar'
import PhotoTable from 'components/PhotoTable'
import { getLookBackPhotos } from 'api/Actions/LookBack'

class LookBack extends React.Component {
  componentDidMount () {
    this.props.getLookBackPhotos({
      guid: this.props.currentUser.guid
    })
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className='container mt-5'>
          {
            Object.keys(this.props.data).map((day, index) => (
              <PhotoTable
                day={day}
                photos={this.props.data[day]}
                key={day}
              />
            ))
          }
        </div>
      </div>
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
