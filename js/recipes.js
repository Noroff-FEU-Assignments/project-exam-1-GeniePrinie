const recipesContainer = document.querySelector(".recipes");
const search = document.querySelector(".our-recipes .search");
let loadMoreButton = document.querySelector(".load_more");
recipesContainer.innerHTML = "";

// const searchValue = event.target.value.trim().toLowerCase();
// search.onkeyup = function (event) {

try {
  fetchAllRecipes().then((recipes) => {
    // get search from user
    const searchValue = "egg";
    // filter recipes
    const filteredRecipes = recipes.filter((recipes) => {
      const name = recipes.title.rendered;
      if (name.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    if (filteredRecipes.length <= 10) {
      loadMoreButton.style.display = "none";
    }

    // display recipes
    filteredRecipes.forEach((recipe) => {
      let id = recipe.id;
      let link = "/html/specificrecipe.html?id=" + id;
      let name = recipe.title.rendered;
      let image = recipe.better_featured_image.source_url;
      const content = recipe.content.rendered;

      const description = content.substring(0, content.lastIndexOf("<figure"));

      createRecipeItem(link, name, image, description);
    });
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

// load more button
let currentItem = 10;
loadMoreButton.addEventListener("click", loadMoreBlogs);
function loadMoreBlogs() {
  let blog = document.getElementsByClassName("recipe");
  for (let i = currentItem; i < currentItem + 10; i++) {
    if (i >= blog.length) break;
    blog[i].style.display = "inline-block";
  }
  currentItem += 10;

  if (currentItem >= blog.length) {
    loadMoreButton.style.display = "none";
  }
}
