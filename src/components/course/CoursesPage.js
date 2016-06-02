import React from 'react';
import {Link} from 'react-router';

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
    alert(`saving ${this.state.course.title}`);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course})
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Courses</h1>
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

export default CoursesPage;
