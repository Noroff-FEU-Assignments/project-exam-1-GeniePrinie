import { renderRecipes } from "/js/pages/recipes/ui/renderRecipes.js";
import { searchRecipes } from "/js/pages/recipes/ui/searchRecipes.js";

try {
  fetchAllRecipes().then((recipes) => {
    renderRecipes(recipes);
    searchRecipes(recipes);
  });
} catch (error) {
  document.querySelector(".recipes").innerHTML = `<div>${error}</div>`;
}
