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

let loadMoreButton = document.querySelector(".load_more");
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
