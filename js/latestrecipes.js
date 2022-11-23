const recipeArticleContainer = document.querySelector(".latest_recipes");
recipeArticleContainer.innerHTML = "";

try {
  fetchLatestRecipes().then((recipes) => {
    for (let i = 0; i < recipes.length; i++) {
      let id = recipes[i].id;
      let link = "/html/specificrecipe.html?id=" + id;
      let name = recipes[i].title.rendered;
      let image = recipes[i].better_featured_image.source_url;

      createRecipeItem(link, name, image);
    }
  });
} catch (error) {
  recipeArticleContainer.innerHTML = `<div>${error}</div>`;
}

function createRecipeItem(link, name, image) {
  recipeArticleContainer.innerHTML += `<article class="recipe slide">
                                <a href="${link}">
                                <img src="${image}" alt="${name}" />
                                <div class="recipe-content">
                                    <h3>${name}</h3>
                                </div>
                                </a>
                            </article>
  `;
}
