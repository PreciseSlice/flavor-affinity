/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import { createStore } from 'redux';
import rootReducer from '../../Reducers/index';

let store = createStore(rootReducer);

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default states of error and errorInfo set to null', () => {
    expect(wrapper.state().error).toEqual(null);
    expect(wrapper.state().errorInfo).toEqual(null);
  });

  describe('componentDidCatch', () => {
    const ProblemChild = () => {
      throw new Error('Error thrown from problem child');
      return <div>Error</div>;
    };

    it('should catch errors with componentDidCatch', () => {
      console.error = jest.fn();
      const spy = jest.spyOn(App.prototype, 'componentDidCatch');
      mount(
        <App>
          <ProblemChild />
        </App>
      );
      expect(App.prototype.componentDidCatch).toHaveBeenCalled();
    });
  });

  describe('clearError', () => {
    it('should clear error by setting the state of error and errorInfo back to null', () => {
      const wrapper = shallow(<App />);
  
      expect(wrapper.state().error).toEqual(null);
      expect(wrapper.state().errorInfo).toEqual(null);
  
      wrapper.setState({
        error: 500,
        errorInfo: 'shits on fire yo'
      });
  
      expect(wrapper.state().error).toEqual(500);
      expect(wrapper.state().errorInfo).toEqual('shits on fire yo');
  
      wrapper.instance().clearError();
  
      expect(wrapper.state().error).toEqual(null);
      expect(wrapper.state().errorInfo).toEqual(null);
    });
  })
});
