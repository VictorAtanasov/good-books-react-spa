import * as actionTypes from './actionTypes';
import BooksAPI from '../api/books';

export function getAll(url) {
  return (dispatch) => {
    return BooksAPI.getBooks(url)
      .then((res) => {
        dispatch({
          type: actionTypes.GET_ALL_BOOKS,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.GET_FAIL,
          payload: err,
        });
      });
  };
}

export function getAllss(url) {
  return (dispatch) => {
    return BooksAPI.getBooks(url)
      .then((res) => {
        dispatch({
          type: actionTypes,
          payload: res,
        });
      });
  };
}
