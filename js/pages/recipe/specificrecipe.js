import { renderRecipe } from "/js/pages/recipe/ui/renderRecipe.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

try {
  fetchSingleRecipe(id).then((recipe) => {
    renderRecipe(recipe);
  });
} catch (error) {
  document.querySelector(".details").innerHTML = `<div>${error}</div>`;
}
