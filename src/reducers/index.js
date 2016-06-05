import {combineReducers} from 'redux';
import ajaxStatus from './ajaxStatusReducer';
import authors from './authorReducer';
import courses from './courseReducer';

const rootReducer = combineReducers({
  ajaxStatus,
  authors,
  courses
});

export default rootReducer;
