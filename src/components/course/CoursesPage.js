import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };
    // Do the binding in the constructor, not the render() method.
    // in render(), it creates a new function, which is not performant
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onClickSave() {
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course});
  }

  courseRow(course, index) {
    return (
      <div key={index}>{course.title}</div>
    );
  }
  render() {
    return (
      <div className="jumbotron">
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>

        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }

}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  //return properties we'd like to see exposed to our component
  return {
    courses: state.courses
  };
}
export default connect(mapStateToProps)(CoursesPage);
