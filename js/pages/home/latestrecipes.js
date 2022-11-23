import { renderRecipesNoDescription } from "/js/pages/home/ui/renderRecipesNoDescription.js";

try {
  fetchLatestRecipes().then((recipes) => {
    renderRecipesNoDescription(recipes);
  });
} catch (error) {
  document.querySelector(".latest_recipes").innerHTML = `<div>${error}</div>`;
}
