//import { fetchFromApi } from '../Helpers/apiCalls';

// export const searchForIngredient = async ingredient => {
//     const searchResult = await fetchFromApi(
//       `https://api.foodpairing.com/ingredients/?q=${ingredient}`
//     );
//     console.log(searchResult);

//     return { type: 'SET_INGREDIENT', SET_INGREDIENT: searchResult };
// };

export const setIngredients = ingredients => ({
  type: 'SET_INGREDIENT',
  ingredients
});
