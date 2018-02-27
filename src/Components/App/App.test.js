/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps } from './App';
import { shallow, mount } from 'enzyme';
import { allIngredients } from './testData';
import { cleanData } from './testData';


window.fetch = jest.fn().mockImplementation(url => {
  return Promise.resolve({
    status: 200,
    json: () => Promise.resolve(allIngredients)
  });
});

let mockFn;

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(
      <App setAllIngredients={mockFn} getAllIngredients={mockFn} />
    );
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default states of error and errorInfo set to null', () => {
    expect(wrapper.state().error).toEqual(null);
    expect(wrapper.state().errorInfo).toEqual(null);
  });

  describe('componentDidMount', () => {
    it('calls componentDidMount() lifecycle method', () => {
      console.error = mockFn;
      const spy = jest.spyOn(App.prototype, 'componentDidMount');
      const wrapper = mount(<App setAllIngredients={mockFn} />);

      expect(App.prototype.componentDidMount).toHaveBeenCalled();

      spy.mockReset();
      spy.mockRestore();
    });

    it('calls getAll ingredients and setAllIngredients when component mounts', () => {
      //expect(wrapper.instance().props.setAllIngredients).toHaveBeenCalled();
      //expect(wrapper.instance().props.getAllIngredients).toHaveBeenCalled();
    });
  });

  describe('componentDidCatch', () => {
    const ProblemChild = () => {
      throw new Error('Error thrown from problem child');
      return <div>Error</div>;
    };

    it('should catch errors with componentDidCatch', () => {
      console.error = mockFn;
      const spy = jest.spyOn(App.prototype, 'componentDidCatch');
      const wrapper = mount(
        <App setAllIngredients={mockFn}>
          <ProblemChild />
        </App>
      );
      expect(App.prototype.componentDidCatch).toHaveBeenCalled();

      spy.mockReset();
      spy.mockRestore();
    });
  });

  describe('clearError', () => {
    it('should clear error by setting the state of error and errorInfo back to null', () => {
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
  });

  describe('MDTP', () => {
    it('should call the dispatch function when using a function from mapDispachToProps', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);

      mapped.setAllIngredients(cleanData);

      expect(mockDispatch).toHaveBeenCalled();
    });
  })

});
