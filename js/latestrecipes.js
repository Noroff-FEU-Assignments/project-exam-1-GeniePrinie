const recipeArticleContainer = document.querySelector(".latest_recipes");
recipeArticleContainer.innerHTML = "";

try {
  fetchLatestRecipes().then((recipes) => {
    for (let i = 0; i < recipes.length; i++) {
      let id = recipes[i].id;
      let link = "/html/specificrecipe.html?id=" + id;
      let name = recipes[i].title.rendered;
      let image = recipes[i].better_featured_image.source_url;
      const content = recipes[i].content.rendered;
      const description = content.substring(0, content.indexOf("<p><i"));

      createRecipeItem(link, name, image, description);
    }
  });
} catch (error) {
  recipeArticleContainer.innerHTML = `<div>${error}</div>`;
}

function createRecipeItem(link, name, image, description) {
  recipeArticleContainer.innerHTML += `<article class="recipe slide">
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
