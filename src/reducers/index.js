import { combineReducers } from 'redux';
import userReducer from './userReducer';
import bookReducer from './booksReducer';

const rootReducer = combineReducers({
  users: userReducer,
  books: bookReducer,
});

export default rootReducer;
