import {combineReducers} from 'redux';
import todoReducer from './Todo/TodoReducer';

const appReducer = combineReducers({
  todo: todoReducer
});
export default appReducer;