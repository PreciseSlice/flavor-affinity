import { AppId, AppKey } from './.apiKey.js';

export const fetchFromApi = async url => {
    const initialFetch = await fetch(url, {
      headers: {
        'X-Application-ID': AppId,
        'X-Application-Key': AppKey
      }
    });

  return await validateResponce(initialFetch)
};

export const validateResponce = initialFetch => {
  if (initialFetch.status <= 200) {
    return initialFetch.json();
  } else {
    throw new Error('Status code > 200');
  }
}

export const searchForIngredient = async ingredient => {
  const searchResult = await fetchFromApi(
    `https://api.foodpairing.com/ingredients/?q=${ingredient}`
  );

  return searchResult;
};

export const getAllIngredients = async () => {
  const allIngredients = await fetchFromApi(
    'https://api.foodpairing.com/ingredients/?limit=500'
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
      selected: false
    };
  });
};

export const getParings = async (id, name) => {
  const pairings = await fetchFromApi(
    `https://api.foodpairing.com/ingredients/${id}/pairings`
  );

  const allPairings = cleanPairings(pairings);

  return slicePairings(allPairings, name);
};

export const cleanPairings = ingredientsData => {
  return ingredientsData.map(ingredient => {
    return {
      id: ingredient._links.ingredient.id,
      name: ingredient._links.ingredient.name.toLowerCase(),
      image: ingredient._links.ingredient._links.image.size_240
    };
  });
};

export const slicePairings = (allPairings, name) => {
  const topFive = allPairings.slice(0, 5);
  const middleFive = allPairings.slice(5, 10);
  const finalFive = allPairings.slice(10, 15);

  return {
    name,
    topFive,
    middleFive,
    finalFive
  };
};
