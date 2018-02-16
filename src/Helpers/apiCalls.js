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
  console.log(searchResult);

  return searchResult;
};

// going to need id after search to get pairing

export const getAllIngredients = async () => {
  const allIngredients = await fetchFromApi(
    'https://api.foodpairing.com/ingredients/?limit=500'
  );
  console.log(allIngredients);

  return allIngredients;
};
