const searchButton = document.getElementById("search-button");
const overlay = document.getElementById("modal-overlay");
const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year")

function searchButtonClickHandler() {
  overlay.classList.add("open");
  console.log(movieName.value.split(' ').join("+"))// tratamento para capturar o nome do filme
  console.log("Ano: ", movieYear.value) // verificando captura do valor do ano
}

searchButton.addEventListener("click", searchButtonClickHandler);
