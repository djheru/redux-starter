import  'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux';//attaches the store to the react container components
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import { loadAuthors } from './actions/authorActions';
import { loadCourses } from './actions/courseActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
