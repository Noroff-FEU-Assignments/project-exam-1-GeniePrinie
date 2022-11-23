const userSearch = document.querySelector(".search");
let loadMoreButton = document.querySelector(".load_more");

try {
  fetchAllRecipes().then((recipes) => {
    renderRecipe(recipes);
    searchRecipe(recipes);
  });
} catch (error) {
  document.querySelector(".recipes").innerHTML = `<div>${error}</div>`;
}

function renderRecipe(recipes) {
  const recipesContainer = document.querySelector(".recipes");
  recipesContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    let id = recipe.id;
    let link = "/html/specificrecipe.html?id=" + id;
    let name = recipe.title.rendered;
    let image = recipe.better_featured_image.source_url;
    let content = recipe.content.rendered;
    let description = content.substring(0, content.indexOf("<p><i"));

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
  });
}

function searchRecipe(recipes) {
  const userSearch = document.querySelector(".search");

  userSearch.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredRecipes = recipes.filter((recipe) => {
      if (recipe.title.rendered.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    renderRecipe(filteredRecipes);
  };
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
