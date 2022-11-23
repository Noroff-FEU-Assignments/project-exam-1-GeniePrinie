import { renderRecipes } from "/js/pages/recipes/ui/renderRecipes.js";

export function searchRecipes(recipes) {
  const userSearch = document.querySelector(".search");

  userSearch.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredRecipes = recipes.filter((recipe) => {
      if (recipe.title.rendered.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    renderRecipes(filteredRecipes);
  };
}
