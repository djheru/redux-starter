import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi.js';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export function loadAuthors() {
  //thunks
  //instead of returning an action like above,
  //thunks return a function that calls dispatch(actioncreator) once
  //the promise resolves (or does something else if there's an error)
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(err => {
        throw(err);
      });
  };
}
