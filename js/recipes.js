const recipesContainer = document.querySelector(".recipes");
recipesContainer.innerHTML = "";

try {
  fetchAllRecipes().then((recipes) => {
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
  recipesContainer.innerHTML = `<div>${error}</div>`;
}

function createRecipeItem(link, name, image, description) {
  recipesContainer.innerHTML += `<article class="recipe">
  <a href="${link}">
   <img src="${image}" alt="${name}" />
    <div class="recipe-content">
      <h2>${name}</h2>
      <p>
      ${description}
      </p>
    </div>
  </a>
</article>`;
}
