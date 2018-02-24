export const fetchFromApi = async url => {
  try {
    const initialFetch = await fetch(url, {
      headers: {
        'X-Application-ID': '68b6cb64',
        'X-Application-Key': 'e1a208ab044e736d99a53065b13fd850'
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

export const getParings = async id => {
  const pairings = await fetchFromApi(
    `https://api.foodpairing.com/ingredients/${id}/pairings`
  );

  const allPairings = cleanPairings(pairings);

  return slicePairings(allPairings)
};

export const cleanPairings = ingredientsData => {
  return ingredientsData.map(ingredient => {
    return {
      id: ingredient._links.ingredient.id,
      name: ingredient._links.ingredient.name.toLowerCase(),
      image: ingredient._links.ingredient._links.image.size_240,
    }
  })
}

export const slicePairings = allPairings => {
  
  const topFive = allPairings.slice(0, 5);
  const middleFive = allPairings.slice(5, 10);
  const finalFive = allPairings.slice(10, 15)

  return {
    topFive,
    middleFive,
    finalFive
  }
} 
