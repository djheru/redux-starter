import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CourseForm from './CourseForm';

import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {

      }
    };
  }

  render() {

    return (
      <CourseForm
        allAuthors={[]}
        errors={this.state.errors}
        course={this.state.course} />
    );

  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
  return {
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
