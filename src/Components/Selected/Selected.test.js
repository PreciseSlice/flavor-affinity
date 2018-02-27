/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Selected, mapStateToProps, mapDispatchToProps } from './Selected';
import { shallow } from 'enzyme';
import { cleanData } from '../App/testData';

describe('MainForm', () => {
  let wrapper;
  const mockFn = jest.fn();

  const pairingsObject = {
    topFive: []
  };

  beforeEach(() => {
    wrapper = shallow(
      <Selected
        selectedCards={cleanData}
        pairingsObject={pairingsObject}
        setPairings={mockFn}
      />
    );
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should map items in the store to props', () => {
      const mockStore = {
        state: {
          selectedCards: cleanData,
          pairingsObject: {}
        }
      };
      const mapped = mapStateToProps(mockStore);

      expect(mapped.selectedCards).toEqual(mockStore.selectedCards);
      expect(mapped.pairingsObject).toEqual(mockStore.pairingsObject);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call the dispatch function when using a function from mapDispachToProps', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      mapped.setPairings();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
