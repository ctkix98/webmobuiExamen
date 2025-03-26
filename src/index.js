import { displaySection, activateLink } from "./helpers.js";
import * as apiCall from "./api";
import "../src/sections/genres-item.js";
import "../src/sections/recettes-item.js";
import { displayGenres } from "./elements/genres.js";
import { displayRecettes } from "./elements/recettes.js";

console.log(await apiCall.getAlleGenres());
//console.log(await apiCall.getReceipesFromAGenre(1));

const routeur = async () => {
  const hash = window.location.hash || "#genres";
  const hashs = hash.split("-");

  // Colorie le lien
  activateLink(hashs[0]);

  switch (hashs[0]) {
    case "#genres":
      if (hashs[1]) {
        console.log(hashs[1]);
        const titreSection = document.querySelector("#section-recipes h4");
        const allGenres = await apiCall.getAlleGenres()
        //console.log(await apiCall.getReceipesFromAGenre(1));
        displayRecettes(await apiCall.getReceipesFromAGenre(hashs[1]))
        displaySection("recipes")

        const currentCat = allGenres.find((cat) =>cat.id ===parseInt(hashs[1]))
        titreSection.textContent = `Genres de recettes > ${currentCat.title}`;

      } else {
        displayGenres(await apiCall.getAlleGenres());
        displaySection("genres");
      }

      break;

    case "#inspiration":
      displaySection("inspiration");
      break;

    case "#liked":
      displaySection("genres");
      break;
  }
};

// On veut être averti des changements
window.addEventListener("hashchange", routeur);

// on exécute une première fois au chargement de la page pour afficher la bonne section
routeur();
