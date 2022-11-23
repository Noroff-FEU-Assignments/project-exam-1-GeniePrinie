import { renderRecipes } from "/js/pages/recipes/renderRecipes.js";
import { searchRecipes } from "/js/pages/recipes/searchRecipes.js";

try {
  fetchAllRecipes().then((recipes) => {
    renderRecipes(recipes);
    searchRecipes(recipes);
  });
} catch (error) {
  document.querySelector(".recipes").innerHTML = `<div>${error}</div>`;
}
