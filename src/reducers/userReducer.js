import * as actionTypes from '../actions/actionTypes';

export default function userReducer(state = { success: false }, action) {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return {
        success: true,
        ...action.payload,
      };
    case actionTypes.REGISTER_FAIL:
      return {
        success: false,
        ...action.payload,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        success: true,
        ...action.payload,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        success: false,
        ...action.payload,
      };
    default:
      return state;
  }
}
