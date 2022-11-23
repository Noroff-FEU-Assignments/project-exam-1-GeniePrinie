const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const selectedId = document.querySelector(".id");
const recipeContainer = document.querySelector(".details");
const pageTitle = document.querySelector("title");

recipeContainer.innerHTML = "";

try {
  fetchSingleRecipe(id).then((recipe) => {
    const name = recipe.title.rendered;
    const content = recipe.content.rendered;

    const description = content.substring(0, content.lastIndexOf("<figure"));
    const ingredients = content.substring(
      content.indexOf("<h2>Ingredients</h2>"),
      content.lastIndexOf("<h2>Instruction</h2>")
    );
    const instruction = content.substring(
      content.indexOf("<h2>Instruction</h2>"),
      content.lastIndexOf("</p>") + 4
    );

    const image = recipe.better_featured_image.source_url;
    const category = recipe._embedded["wp:term"][0][0].name;

    createSpecificRecipe(
      name,
      category,
      description,
      ingredients,
      instruction,
      image
    );
  });
} catch (error) {
  recipeContainer.innerHTML = `<div>${error}</div>`;
}

function createSpecificRecipe(
  name,
  category,
  description,
  ingredients,
  instruction,
  image
) {
  pageTitle.innerHTML = `LO. | ${name}`;
  recipeContainer.innerHTML += `<div class="details-child details-top-child subcontainer">
                              
                                  <div class="image-container">
                                    <img src="${image}" alt="${name}" class="targetImage"/>
                                  </div>

                                  <div class="pop-up-background">
                                    <img class="pop-up-image" src="${image}" alt="${name}">
                                  </div>

                                  <div>
                                    <h3>${category}</h3>
                                    <h1>${name}</h1>
                                    <p>
                                    ${description}
                                    </p>
                                  </div>

                                </div>

                                <div class="details-child details-bottom-child">
                                  <div class="details-bottom-child-ingredients">
                                    ${ingredients}
                                  </div>

                                  <div class="details-bottom-child-instruction">
                                    ${instruction}
                                  </div>
                                </div>`;

  const rootImage = document.querySelector(".targetImage");
  const modalBackground = document.querySelector(".pop-up-background");
  const modalImage = document.querySelector(".pop-up-image");

  rootImage.addEventListener("click", displayModal);
  modalBackground.addEventListener("click", closeModal);
  modalImage.addEventListener("click", keepModal);
}

function displayModal() {
  document.querySelector(".pop-up-background").style.display = "block";
}

function closeModal() {
  document.querySelector(".pop-up-background").style.display = "none";
}

function keepModal(e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  return false;
}
