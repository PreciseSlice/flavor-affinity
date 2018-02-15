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
      throw new Error('Bad status code');
    }
  } catch (error) {
    return alert(error);
  }
};

export const getAllIngredients = async () => {
  // does this need the try catch? 
  try {
    // if this is allways returning the same thing, grab it and store it in the app
    // on load put all the data into the store and set the trie  
    const allIngredients = await fetchFromApi(
      'https://api.foodpairing.com/ingredients/?limit=500'
    )
    return allIngredients
  } catch (error) {
    return alert(error)
  }
}

export const searchForIngredient = async ingredient => {
  const searchResult = await fetchFromApi(
    `https://api.foodpairing.com/ingredients/?q=${ingredient}`
  );
  console.log(searchResult);

  return searchResult;
};

// going to need id after search to get pairing 
// need to handle multiple results being returned
