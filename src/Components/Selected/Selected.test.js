import React from 'react';
import ReactDOM from 'react-dom';
import { Selected , mapStateToProps } from './Selected';
import { shallow } from 'enzyme';
import { cleanData } from '../App/testData';

describe('MainForm', () => {
  let wrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Selected selectedCards={cleanData} />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should map items in the store to props', () => {
      const mockStore = {
        state: {
          selectedCards: cleanData
        }
      };
      const mapped = mapStateToProps(mockStore);

      expect(mapped.selectedCards).toEqual(mockStore.selectedCards);
    });
  });

});