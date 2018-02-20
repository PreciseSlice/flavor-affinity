/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  fetchFromApi,
  searchForIngredient,
  getAllIngredients,
  cleanAllIngredients
} from './apiCalls';
import { allIngredients, cleanData } from '../Components/App/testData';

describe('apiCalls', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(url => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve(allIngredients)
      });
    });
  });

  it('has multiple functions', () => {
    expect(fetchFromApi).toBeDefined();
    expect(searchForIngredient).toBeDefined();
    expect(getAllIngredients).toBeDefined();
    expect(cleanAllIngredients).toBeDefined();
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
      expect(fetchFromApi('url')).rejects.toEqual(
        Error('Error: Status code > 200')
      );
    });
  });

  describe('searchForingredient', () => {
    it('calls fetchFromApi to get data', () => {
      expect(window.fetch).not.toHaveBeenCalled();
      searchForIngredient('url');
      expect(window.fetch).toHaveBeenCalled();
    });
  });

  //check to see that it is called with specific parameters

  describe('getAllIngredients', () => {
    it('calls fetchFromApi and clean all ingredients', () => {
      //const cleanAllIngredients = jest.fn()
      expect(window.fetch).not.toHaveBeenCalled();
      getAllIngredients('url');
      expect(window.fetch).toHaveBeenCalled();
      //expect(cleanAllIngredients).toHaveBeenCalled();
    });
  });

  describe('cleanAllIngredients', () => {
    it('filters the array of objects passed to it', () => {
      const result = cleanAllIngredients(allIngredients);

      expect(result).toEqual(cleanData);
    });
  });
});
