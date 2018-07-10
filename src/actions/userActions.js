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
          const data = JSON.stringify({ ...res.payload });
          localStorage.setItem('user', data);
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

export function getUser() {
  return () => {
    const user = localStorage.getItem('user');
    return user;
  };
}
