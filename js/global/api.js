async function fetchAllRecipes() {
  const url =
    "https://genieprinyanut.com/Noroff/living-organically-api/wp-json/wp/v2/posts?per_page=100";
  const response = await fetch(url);
  const recipes = await response.json();
  return recipes;
}

async function fetchSingleRecipe(id) {
  const url =
    "https://genieprinyanut.com/Noroff/living-organically-api/wp-json/wp/v2/posts/" +
    id +
    "/?_embed=wp:term";
  const response = await fetch(url);
  const recipe = await response.json();
  return recipe;
}

async function fetchLatestRecipes() {
  const url =
    "https://genieprinyanut.com/Noroff/living-organically-api/wp-json/wp/v2/posts?per_page=16";
  const response = await fetch(url);
  const latestRecipes = await response.json();
  return latestRecipes;
}
