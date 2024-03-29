import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorsReducer(state = initialState.authors, action = { type: '' }) {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}
