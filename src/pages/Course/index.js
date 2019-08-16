
import React from 'react'
import { connect } from 'react-redux'
import Layout from 'components/Layout'
import { CourseCard, CourseText } from 'components/Course'
import { getCourse } from 'api/Actions/Course'

class Course extends React.Component {
  componentDidMount () {
    this.props.getCourse({
      guid: this.props.currentUser.guid
    })
  }

  render () {
    const { data } = this.props

    return (
      <Layout>
        <div className='row justify-content-center my-3'>
          {
            data.course.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                text={course.text}
                image={course.url}
              />
            ))
          }
          <CourseText text={data.summary} />
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.course.data,
  currentUser: state.user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  getCourse: (payload) => dispatch(getCourse(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Course)
