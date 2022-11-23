export function loadMore() {
  let loadMoreButton = document.querySelector(".load_more");
  let currentItem = 10;

  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", () => {
      let blog = document.getElementsByClassName("recipe");
      for (let i = currentItem; i < currentItem + 10; i++) {
        if (i >= blog.length) break;
        blog[i].style.display = "inline-block";
      }
      currentItem += 10;

      if (currentItem >= blog.length) {
        loadMoreButton.style.display = "none";
      }
    });
  }
}

export function checkNumberOfRecipes(num) {
  let loadMoreButtonContainer = document.querySelector(".load-more");

  if (num <= 10) {
    loadMoreButtonContainer.innerHTML = "";
  } else {
    loadMoreButtonContainer.innerHTML = `<div class="load_more">Load more</div>`;
  }
}
