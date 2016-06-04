import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course
  };
}

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function loadCourses() {
  //thunks
  //instead of returning an action like above,
  //thunks return a function that calls dispatch(actioncreator) once
  //the promise resolves (or does something else if there's an error)
  return function (dispatch) {
    return courseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(err => {
        throw(err);
      });
  };
}
