import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './Todo/TodoApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import appReducer from './Reducers';

const store = createStore(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.querySelector('#root')
);