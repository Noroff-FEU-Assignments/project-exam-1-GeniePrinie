const recipeArticle = document.querySelector(".latest_recipes");
recipeArticle.innerHTML = "";

try {
  fetchLatestRecipes().then((recipes) => {
    for (let i = 0; i < recipes.length; i++) {
      let id = recipes[i].id;
      let link = "/html/specificrecipe.html?id=" + id;
      let name = recipes[i].title.rendered;
      let image = recipes[i].better_featured_image.source_url;
      let description = recipes[i].content.rendered;
      createRecipeItem(link, name, image, description);
    }
  });
} catch (error) {
  recipeArticle.innerHTML = `<div>${error}</div>`;
}

function createRecipeItem(link, name, image, description) {
  recipeArticle.innerHTML += `<article class="recipe slide">
                                <a href="${link}">
                                <img src="${image}" alt="${name}" />
                                <div class="recipe-content">
                                    <h3>${name}</h3>
                                    <p>
                                    ${description}
                                    </p>
                                </div>
                                </a>
                            </article>
  `;
}
