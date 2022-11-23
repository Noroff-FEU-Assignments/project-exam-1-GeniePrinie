export function renderRecipesNoDescription(recipes) {
  const recipeArticleContainer = document.querySelector(".latest_recipes");
  recipeArticleContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    let id = recipe.id;
    let link = "/html/specificrecipe.html?id=" + id;
    let name = recipe.title.rendered;
    let image = recipe.better_featured_image.source_url;

    recipeArticleContainer.innerHTML += `
    <article class="recipe slide">
        <a href="${link}">
            <img src="${image}" alt="${name}" />
            <div class="recipe-content">
                <h3>${name}</h3>
            </div>
        </a>
    </article>`;
  });
}
