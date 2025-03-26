import {displaySection, activateLink} from './helpers.js'
import * as apiCall from "./api";
import "../src/sections/genres-item.js";
import { displayGenres } from './elements/genres.js';

console.log(await apiCall.getAlleGenres())


const routeur = async () => {
  const hash = window.location.hash || '#genres'
  const hashs = hash.split('-')

  // Colorie le lien
  activateLink(hashs[0])

  switch(hashs[0]) {
    case '#genres':
      displayGenres(await apiCall.getAlleGenres());
      displaySection('genres')
    break;

    case '#inspiration':
      displaySection('inspiration')
    break;

    case '#liked':
      displaySection('genres')
    break;
  }
}

// On veut être averti des changements
window.addEventListener('hashchange', routeur)

// on exécute une première fois au chargement de la page pour afficher la bonne section
routeur()
