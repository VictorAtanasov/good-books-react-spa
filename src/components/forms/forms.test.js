/* eslint-disable */

import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from './Form';
import Input from './Input';
import userModel from '../../models/user.form.model';

configure({
  adapter: new Adapter(),
});

describe('<Form />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Form formFields={{...userModel.registrationForm}} />);
  });

  it('Check Inputs length on registration', () => {
    expect(wrapper.find(Input)).toHaveLength(3);
  });

  it('Check Inputs length on login', () => {
    wrapper.setProps({
      formFields: {
        ...userModel.loginForm
      }
    })
    expect(wrapper.find(Input)).toHaveLength(2);
  });
});
