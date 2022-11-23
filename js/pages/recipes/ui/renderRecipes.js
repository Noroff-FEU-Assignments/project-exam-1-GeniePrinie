import {
  checkNumberOfRecipes,
  loadMore,
} from "/js/pages/recipes/ui/loadMore.js";

export function renderRecipes(recipes) {
  const recipesContainer = document.querySelector(".recipes");
  recipesContainer.innerHTML = "";

  checkNumberOfRecipes(recipes.length);

  recipes.forEach((recipe) => {
    let id = recipe.id;
    let link = "/html/specificrecipe.html?id=" + id;
    let name = recipe.title.rendered;
    let image = recipe.better_featured_image.source_url;
    let content = recipe.content.rendered;
    let description = content.substring(0, content.indexOf("<p><i"));

    recipesContainer.innerHTML += `
    <article class="recipe">
        <a href="${link}">
            <img src="${image}" alt="${name}" />
            <div class="recipe-content">
                <h2>${name}</h2>
                <p>${description}</p>
            </div>
        </a>
    </article>`;
  });
  loadMore();
}
