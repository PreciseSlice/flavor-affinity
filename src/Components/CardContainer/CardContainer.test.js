import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer,  mapStateToProps } from './CardContainer';
import { cleanData } from '../App/testData';

describe( 'CardContainer', () => {
  
  it('exist and matches snapshot', () => {
    const wrapper = shallow(
      <CardContainer  allIngredients={cleanData} />
    )
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot()
  })

  it('should map items in the store to props', () => {
    const mockStore = {
      state : {
        ingredients: cleanData
      }
    };
    const mapped = mapStateToProps(mockStore);

    expect(mapped.allIngredients).toEqual(mockStore.allIngredients);
  });

})