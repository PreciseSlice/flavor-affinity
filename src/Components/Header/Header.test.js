import React from 'react';
import ReactDOM from 'react-dom';
import { Header , mapStateToProps } from './Header';
import { shallow } from 'enzyme';
import { cleanData } from '../App/testData';

describe('Header', () => {
  let wrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Header selectedCards={cleanData} />);
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