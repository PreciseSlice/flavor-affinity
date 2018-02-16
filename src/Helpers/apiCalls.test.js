/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { fetchFromApi, searchForIngredient, getAllIngredients } from './apiCalls';

describe('apiCalls', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(url => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve({})
      });
    });
  });

  it('has multiple functions', () => {
    expect(fetchFromApi).toBeDefined();
    expect(searchForIngredient).toBeDefined();
  });

  describe('fetchFromApi', () => {
    it('calls fetch if status less than or equal to 200', () => {
      expect(window.fetch).not.toHaveBeenCalled();
      fetchFromApi('url');
      expect(window.fetch).toHaveBeenCalled();
    });

    it('returns an error it responce is greater than 200 ', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 500
        })
      );
      expect(fetchFromApi('url')).rejects.toEqual(Error('Error: Status code > 200'));
    });
  });

  describe('searchForingredient', () => {
    it('calls fetchFromApi to get data', () => {
      expect(window.fetch).not.toHaveBeenCalled();
      searchForIngredient('url');
      expect(window.fetch).toHaveBeenCalled();
    });
  })

  describe('getAllIngredients', () => {
    it('calls fetchFromApi to get data', () => {
      expect(window.fetch).not.toHaveBeenCalled();
      getAllIngredients('url');
      expect(window.fetch).toHaveBeenCalled();
    });
  })

});
