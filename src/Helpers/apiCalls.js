export const fetchFromApi = async url => {
  try {
    const initialFetch = await fetch(url, {
      headers: {
        'X-Application-ID': '***REMOVED***',
        'X-Application-Key': '***REMOVED***'
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
    const allIngredients = await fetchFromApi(
      'https://api.foodpairing.com/ingredients/?limit=500'
    )
    return allIngredients
  } catch (error) {
    return alert(error)
  }
}
