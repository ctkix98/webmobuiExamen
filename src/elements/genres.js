import { setItem, getItem, getItems,removeItem } from "../lib/local-storage";


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
    if (getItem(genre.id)) {
        genrePart.setAttribute("favorite", true);
      } else {
        genrePart.setAttribute("favorite", false);
      }



    genreSection.append(genrePart)
    compteur +=1;

    genrePart.addEventListener("favorite", (e) => {
        if (getItem(genre.id)) {
          genrePart.setAttribute("favorite", false);
          removeItem(genre.id);
        } else {
          genrePart.setAttribute("favorite", true);
          setItem(genre.id, genre);
        }
  
        //console.log("Je suis dans annonce.js")
        //localStorage.setItem("monChat", "Tom");
      });


  });
  titrePage.textContent = `Genres de recettes (${compteur})`

}