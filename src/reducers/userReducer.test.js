/* eslint-disable */

import reducer from './userReducer';
import * as actionTypes from '../actions/actionTypes';

describe('check user reducer on registration', () => {
  it('Check registration', () => {
    expect(reducer({ }, {
      type: actionTypes.REGISTER_SUCCESS,
      payload: {
        email: 'user-email',
        password: 'user-password',
        username: 'user-username',
      }
    })).toEqual({
      success: true,
      email: 'user-email',
      password: 'user-password',
      username: 'user-username',
    })
  });
});
