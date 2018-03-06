/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from './CardContainer';
import { cleanData } from '../App/testData';

describe('CardContainer', () => {

  const pairingsObject = {
    topFive: []
  }

  it('matches snapshot', () => {
    const wrapper = shallow(
      <CardContainer
        allIngredients={cleanData}
        suggestedIngredients={cleanData}
        pairingsObject={pairingsObject}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should map items in the store to props', () => {
    const mockStore = {
      state: {
        ingredients: cleanData,
        suggestedIngredients: cleanData,
        pairingsObject: {}
      }
    };
    const mapped = mapStateToProps(mockStore);

    expect(mapped.allIngredients).toEqual(mockStore.ingredients);
    expect(mapped.suggestedIngredients).toEqual(mockStore.suggestedIngredients);
    expect(mapped.pairingsObject).toEqual(mockStore.pairingsObject);
  });
});
