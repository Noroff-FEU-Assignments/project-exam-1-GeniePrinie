const recipesContainer = document.querySelector(".recipes");
recipesContainer.innerHTML = "";

const url =
  "https://genieprinyanut.com/Noroff/living-organically-api/wp-json/wp/v2/posts?per_page=100";

async function fetchrecipe() {
  try {
    const response = await fetch(url);
    const recipes = await response.json();

    for (let i = 0; i < recipes.length; i++) {
      let link = recipes[i].link;
      let name = recipes[i].title.rendered;
      let image = recipes[i].better_featured_image.source_url;
      let description = recipes[i].content.rendered;
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
  } catch (error) {
    recipesContainer.innerHTML = message("error", error);
  }
}

function message(messageType = "success", message = "") {
  return `<div class="alert ${messageType}">${message}</div>`;
}

fetchrecipe();
