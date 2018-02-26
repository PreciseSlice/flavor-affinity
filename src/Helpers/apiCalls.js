import { AppId, AppKey } from './.apiKey.js';

export const fetchFromApi = async url => {
  try {
    const initialFetch = await fetch(url, {
      headers: {
        'X-Application-ID': AppId,
        'X-Application-Key': AppKey
      }
    });
    if (initialFetch.status <= 200) {
      return await initialFetch.json();
    } else {
      throw new Error('Status code > 200');
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const searchForIngredient = async ingredient => {
  const searchResult = await fetchFromApi(
    `https://api.foodpairing.com/ingredients/?q=${ingredient}`
  );

  return searchResult;
};

export const getAllIngredients = async () => {
  const allIngredients = await fetchFromApi(
    'https://api.foodpairing.com/ingredients/?limit=5'
  );

  return cleanAllIngredients(allIngredients);
};

export const cleanAllIngredients = ingredientsData => {
  return ingredientsData.map(ingredient => {
    return {
      id: ingredient.id,
      name: ingredient.name.toLowerCase(),
      image: ingredient._links.image.size_240,
      description: ingredient.description,
      favorite: false
    };
  });
};
