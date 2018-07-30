import * as actionTypes from '../actions/actionTypes';

export default function booksReducer(state = { success: false }, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_BOOKS:
      return {
        success: true,
        ...action.payload,
      };
    default:
      return state;
  }
}
