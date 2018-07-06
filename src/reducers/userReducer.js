import * as actionTypes from '../actions/actionTypes';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return {
        success: true,
        ...action.payload,
      };
    default:
      return state;
  }
}
