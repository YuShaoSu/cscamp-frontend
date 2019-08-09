
import React from 'react'
import { connect } from 'react-redux'
import Navbar from 'components/Navbar'
import PhotoTable from 'components/PhotoTable'

class LookBack extends React.Component {
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
  data: state.lookBack.data
})
const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(LookBack)
