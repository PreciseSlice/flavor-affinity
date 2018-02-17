/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { MainForm, mapDispatchToProps } from './MainForm';
import { shallow, mount } from 'enzyme';

describe('MainForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainForm />);
  });

  it('Exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state of userInput set to an empty string', () => {
    expect(wrapper.state().userInput).toEqual('');
  });

  describe('handleChange', () => {
    it('should set the user input to state', () => {
      const event = { target: { value: 'Hello', name: 'userInput' } };

      expect(wrapper.state().userInput).toEqual('');
      wrapper.instance().handleChange(event);
      expect(wrapper.state().userInput).toEqual('Hello');
    });
  });

  describe('submitForm', () => {
    it('should call searchForIngredients and setIngredients', () => {
      const mockFn = jest.fn();
      const event = { preventDefault: mockFn };

      window.fetch = jest.fn().mockImplementation(url => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve({})
        });
      });

      wrapper = shallow(<MainForm setIngredients={mockFn} />);
      wrapper.instance().submitForm(event);

      expect(window.fetch).toHaveBeenCalled();
      expect(wrapper.instance().props.setIngredients).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call the dispatch function when using a function from mapDispachToProps', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);

      mapped.setIngredients();

      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
  });
});
