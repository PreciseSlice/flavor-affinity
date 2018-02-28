/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapDispatchToProps, mapStateToProps } from './Card';
import { cleanData } from '../App/testData';

const cardData = {
  description:
    'The essence of 1724 Tonic Water has its origins in the Andes, on the mythical Inca Trail. This is not by chance. This is where quinine was discovered. There, this ingredient gains the authenticity of a product with roots in the region that go back hundreds of years. At 1724 metres above sea level. Not a metre above or below.',
  id: 5902,
  image: 'https://pantry.foodpairing.com/apps/4578_240_0',
  name: '1724 Tonic'
};

let mockFn;

describe('Card', () => {
  it('matches snapshot', () => {
    mockFn = jest.fn();
    const wrapper = shallow(
      <Card data={cardData} selectCard={mockFn} setPairings={mockFn} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  // handle pairing test

  describe('MDTP', () => {
    it('should call the dispatch function when using a function from mapDispachToProps', () => {
      const id = 123;
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);

      mapped.selectCard(id);
      mapped.setPairings();

      expect(mockDispatch).toHaveBeenCalledTimes(2);
    });
  })

});
