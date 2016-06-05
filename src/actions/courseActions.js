import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function createCourseSuccess(course) {
  return {
    type: types.CREATE_COURSE_SUCCESS,
    course
  };
}

export function updateCourseSuccess(course) {
  return {
    type: types.UPDATE_COURSE_SUCCESS,
    course
  };
}

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

export function saveCourse(course) {
  return function(dispatch) {
    dispatch(beginAjaxCall);
    return CourseApi.saveCourse(course)
      .then(course => {
        course.id ? dispatch(updateCourseSuccess(course)) :
          dispatch(createCourseSuccess(course));
      })
      .catch(err => {
        throw(err);
      });
  };
}

export function loadCourses() {
  //thunks
  //instead of returning an action like above,
  //thunks return a function that calls dispatch(actioncreator) once
  //the promise resolves (or does something else if there's an error)
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return CourseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(err => {
        throw(err);
      });
  };
}
