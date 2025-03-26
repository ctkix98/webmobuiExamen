export function displayGenres(arrayGenres) {
    let genreSection = document.querySelector(".genres");
    genreSection.innerHTML = ""; 

    let titrePage = document.querySelector("#section-genres h4")
    let compteur = 0;


  arrayGenres.forEach((genre) => {
    const genrePart = document.createElement("genres-item");
    genrePart.setAttribute("title", genre.title);
    genrePart.setAttribute("count", genre.count);
    genrePart.setAttribute("thumbnail_url", genre.thumbnail_url);
    genrePart.setAttribute("href", `#genres-${genre.id}`)



    genreSection.append(genrePart)
    compteur +=1;
  });
  titrePage.textContent = `Genres de recettes (${compteur})`

}