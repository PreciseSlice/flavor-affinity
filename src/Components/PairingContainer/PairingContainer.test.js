import React from 'react';
import ReactDOM from 'react-dom';
import { PairingContainer, mapStateToProps } from './PairingContainer';
import { shallow } from 'enzyme';
import { cleanData } from '../App/testData';
import { slicedData } from '../../Helpers/testingMockData';

describe('MainForm', () => {
  let wrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<PairingContainer pairingsObject={slicedData} />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should map items in the store to props', () => {
      const mockStore = {
        state: {
          pairingsObject: slicedData
        }
      };
      const mapped = mapStateToProps(mockStore);

      expect(mapped.pairingsObject).toEqual(mockStore.pairingsObject);
    });
  });

});