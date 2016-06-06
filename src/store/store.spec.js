import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
  it('should create courses', () => {
    //arrange
    //create store
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'Clean Code'
    };

    //act
    //call action creator
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    //assert
    const actual = store.getState().courses;
    const expected = [{title: "Clean Code"}];
    expect(actual).toEqual(expected);
  });
});
