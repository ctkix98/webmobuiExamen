import {displaySection, activateLink} from './helpers.js'


const routeur = () => {
  const hash = window.location.hash || '#genres'
  const hashs = hash.split('-')

  // Colorie le lien
  activateLink(hashs[0])

  switch(hashs[0]) {
    case '#genres':
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
