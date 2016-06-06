import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

//test sync actions
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('creates a CREATE_COURSE_SUCCESS action', () => {
      //arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      //act
      const action = courseActions.createCourseSuccess(course);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});


//async actions
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
describe('Async Actions', () => {

  it('creates BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS actions when loading courses', (done) => {
    let mockCourseArray = [{id: 'clean-code', title: 'Clean Code'}];
    /*
    Example nock
    nock('http://example.com/')
      .get('/courses')
      .reply(200, { body: {courses: mockCourseArray}});
     */
    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: mockCourseArray}}
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.loadCourses())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
        done();
      });

  });

  afterEach(() => {
    nock.cleanAll();
  });
});
