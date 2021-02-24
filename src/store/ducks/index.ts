import { combineReducers } from 'redux';

import todoReducer from './todos.duck';

export default combineReducers({
  todos: todoReducer,
});
