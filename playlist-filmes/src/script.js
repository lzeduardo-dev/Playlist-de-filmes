const searchButton = document.getElementById("search-button");
const overlay = document.getElementById("modal-overlay");
const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");
const key = "cedda5d9";

async function searchButtonClickHandler() {
  let url = `http://www.omdbapi.com/?apikey=${key}&t=${movieName.value
    .split(" ")
    .join("+")}&y=${movieYear.value}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log("data: ", data);  
  overlay.classList.add("open");
}

searchButton.addEventListener("click", searchButtonClickHandler);
