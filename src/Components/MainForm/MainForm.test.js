/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { MainForm, mapDispatchToProps, mapStateToProps } from './MainForm';
import { shallow, mount } from 'enzyme';
import { cleanData } from '../App/testData';

describe('MainForm', () => {
  let wrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<MainForm suggestedIngredients={cleanData} setSuggestedIngredients={mockFn} />);
  });

  it('Exist and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state of userInput set to an empty string', () => {
    expect(wrapper.state().userInput).toEqual('');
  });

  describe('componentWillReciveProps', () => {
    it('should call tries populate method once props are recieved', () => {
      const mockFn = jest.fn();
      const spy = jest.spyOn(MainForm.prototype, 'componentWillReceiveProps');
      const wrapper = mount(
        <MainForm
          suggestedIngredients={cleanData}
          setSuggestedIngredients={mockFn}
        />
      );

      expect(
        MainForm.prototype.componentWillReceiveProps
      ).not.toHaveBeenCalled();

      wrapper.setProps({ suggestedIngredients: cleanData });

      expect(MainForm.prototype.componentWillReceiveProps).toHaveBeenCalled();

      // need to mock this
      //expect(wrapper.instance().trie.populate).toHaveBeenCalled()

      spy.mockReset();
      spy.mockRestore();
    });
  });

  describe('handleChange', () => {
    const event = { target: { value: 'Apple', name: 'userInput' } };

    it('should set the user input to state', () => {
      expect(wrapper.state().userInput).toEqual('');
      wrapper.instance().handleChange(event);
      expect(wrapper.state().userInput).toEqual('Apple');
    });

    it.skip('should call suggestIngredient', () => {
      const suggestIngredient = jest.fn();
      wrapper.instance().handleChange(event);
      expect(wrapper.instance().suggestIngredient).toHaveBeenCalled();
    });
  });

  describe.skip('submitForm', () => {
    it('should call searchForIngredients and setAllIngredients', () => {
      const mockFn = jest.fn();
      const event = { preventDefault: mockFn };

      window.fetch = jest.fn().mockImplementation(url => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve({})
        });
      });

      wrapper = shallow(
        <MainForm setAllIngredients={mockFn} suggestedIngredients={cleanData} />
      );
      wrapper.instance().submitForm(event);

      expect(window.fetch).toHaveBeenCalled();
      expect(wrapper.instance().props.setAllIngredients).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('should map items in the store to props', () => {
      const mockStore = {
        state: {
          ingredients: cleanData
        }
      };
      const mapped = mapStateToProps(mockStore);

      expect(mapped.allIngredients).toEqual(mockStore.allIngredients);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call the dispatch function when using a function from mapDispachToProps', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      //verify what is being returned from MDTP object

      mapped.setAllIngredients();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
