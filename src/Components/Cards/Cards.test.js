/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Cards from './Cards';
import { cleanData } from '../App/testData';

describe('CardContainer', () => {

  it('matches snapshot', () => {
    const wrapper = shallow(
      <Cards
        allIngredients={cleanData}
        ingredients={cleanData}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});