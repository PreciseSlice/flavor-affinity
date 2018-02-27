/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { MainForm, mapDispatchToProps, mapStateToProps } from './MainForm';
import { shallow } from 'enzyme';
import { cleanData } from '../App/testData';

describe('MainForm', () => {
  let wrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <MainForm
        suggestedIngredients={cleanData}
        setSuggestedIngredients={mockFn}
        setUserInput={mockFn}
      />
    );
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('componentWillReciveProps', () => {
    it('should call tries populate method once props are recieved', () => {
      const mockFn = jest.fn();
      const spy = jest.spyOn(MainForm.prototype, 'componentWillReceiveProps');
      const wrapper = shallow(
        <MainForm
          suggestedIngredients={cleanData}
          setSuggestedIngredients={mockFn}
          setUserInput={mockFn}
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

    it.skip('should set the user input to state', () => {
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

  describe('mapStateToProps', () => {
    it('should map items in the store to props', () => {
      const mockStore = {
        state: {
          ingredients: cleanData,
          suggestedIngredients: cleanData
        }
      };
      const mapped = mapStateToProps(mockStore);

      expect(mapped.allIngredients).toEqual(mockStore.ingredients);
      expect(mapped.suggestedIngredients).toEqual(
        mockStore.suggestedIngredients
      );
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call the dispatch function when using a function from mapDispachToProps', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      //verify what is being returned from MDTP object
      // .toHaveBeenCalledWith(expectedParams)
      mapped.setAllIngredients();
      mapped.setSuggestedIngredients();

      expect(mockDispatch).toHaveBeenCalledTimes(2);
    });
  });
});
