import Auth from '../api/auth';
import * as actionTypes from './actionTypes';

export function registerUser(user) {
  return (dispatch) => {
    return Auth.register(user)
      .then((res) => {
        dispatch({
          type: actionTypes.REGISTER_SUCCESS,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.REGISTER_FAIL,
          payload: err,
        });
      });
  };
}

export function loginUser(user) {
  return (dispatch) => {
    console.log(user);
  };
}
