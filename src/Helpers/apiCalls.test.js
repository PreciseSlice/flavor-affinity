/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  fetchFromApi,
  searchForIngredient,
  getAllIngredients,
  cleanAllIngredients,
  getParings,
  cleanPairings,
  slicePairings
} from './apiCalls';
import { allIngredients, cleanData } from '../Components/App/testData';
import { pairingsObject } from '../Actions/testingData';
import { rawPairingData, cleanPairingData, slicedData } from './testingMockData';

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
    expect(getParings).toBeDefined();
    expect(cleanPairings).toBeDefined();
    expect(slicePairings).toBeDefined();
  });

  describe('fetchFromApi', () => {
    it('calls fetch if status less than or equal to 200', () => {
      expect(window.fetch).not.toHaveBeenCalled();
      fetchFromApi('https://api.foodpairing.com/ingredients/');
      expect(window.fetch).toHaveBeenCalled();
    });

    it('returns an error it responce is greater than 200 ', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 500
        })
      );
      expect(
        fetchFromApi('https://api.foodpairing.com/ingredients/')
      ).rejects.toEqual(Error('Error: Status code > 200'));
    });
  });

  describe('searchForingredient', () => {
    it('calls fetchFromApi to get data', () => {
      expect(window.fetch).not.toHaveBeenCalled();
      searchForIngredient();
      expect(window.fetch).toHaveBeenCalled();
    });
  });

  describe('getAllIngredients', () => {
    it('calls fetchFromApi and clean all ingredients', () => {
      //const cleanAllIngredients = jest.fn()
      expect(window.fetch).not.toHaveBeenCalled();
      getAllIngredients();
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

  describe.skip('getPairings', () => {
    it('calls fetchFromApi, cleanPairings and slicePairings', () => {
      window.fetch = jest.fn().mockImplementation(url => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve(pairingsObject)
        });
      });
    });
    expect(window.fetch).not.toHaveBeenCalled();
    getParings(135, 'turnip');
    expect(window.fetch).toHaveBeenCalled();
    //expect(cleanPairings).toHaveBeenCalled();
    //expect(slicePairings).toHaveBeenCalled();
  });

  describe('cleanPairings', () => {
    it('filters the array of objects passed to it', () => {
      const result = cleanPairings(rawPairingData);

      expect(result).toEqual(cleanPairingData);
    });
  });

  describe('slicePairings', () => {
    it('slices allPairings into 3 arrays of 5 and returns the name of the ingredient', () => {
      const result = slicePairings(cleanPairingData, 'green pepper')

      expect(result).toEqual(slicedData)
    });
  });
});
