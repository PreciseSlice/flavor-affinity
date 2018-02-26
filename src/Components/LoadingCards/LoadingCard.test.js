/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import LoadingCards from './LoadingCards';
import { shallow } from 'enzyme';

describe('LoadingCards', () => {
  let wrapper;
  const mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<LoadingCards />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});