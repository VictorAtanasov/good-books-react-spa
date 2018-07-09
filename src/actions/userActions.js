/* global localStorage */

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
    return Auth.login(user)
      .then((res) => {
        if (res.success) {
          localStorage.setItem('userToken', res.payload.token);
          localStorage.setItem('userAvatar', res.payload.avatar);
          localStorage.setItem('userEmail', res.payload.email);
          localStorage.setItem('userUserId', res.payload.userId);
          localStorage.setItem('userUsername', res.payload.username);
          dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: res,
          });
        } else {
          dispatch({
            type: actionTypes.LOGIN_FAIL,
            payload: res,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.LOGIN_FAIL,
          payload: err,
        });
      });
  };
}
