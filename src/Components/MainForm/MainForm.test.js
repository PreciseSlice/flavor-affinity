/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { MainForm, mapDispatchToProps } from './MainForm';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import rootReducer from '../../Reducers/index';

let store = createStore(rootReducer);

describe('MainForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <MainForm />);
  });

  it('Exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

});