/* eslint-disable */

import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Authentication } from './Authentication';
import Form from '../components/forms/Form';

configure({
  adapter: new Adapter(),
});

describe('<Authentication />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Authentication type='loginForm' match={{url: '/auth/login'}} />);
  });

  it('check if Authentication container have the right state on login', () => {
    expect(Object.keys(wrapper.state().formFields)).toHaveLength(2);
  });

  it('check if Form component have the right state on login', () => {
    expect(Object.keys(wrapper.find(Form).props().formFields)).toHaveLength(2);
  });

  it('check if Authentication conatiner have the right state on register', () => {
    wrapper.setProps({
      type:'registrationForm',
      match:{url: '/auth/register'}
    })
    expect(Object.keys(wrapper.state().formFields)).toHaveLength(3);
  });

  it('check if Form component have the right state on register', () => {
    wrapper.setProps({
      type:'registrationForm',
      match:{url: '/auth/register'}
    })
    expect(Object.keys(wrapper.find(Form).props().formFields)).toHaveLength(3);
  });
});
