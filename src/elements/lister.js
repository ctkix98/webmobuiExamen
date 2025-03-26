const displayRecette = document.querySelector(".card card--recipe-details")

//Partie recette
const image = document.querySelector("img")
const nameRecette = document.querySelector(".card--recipe-details-details h4")
const detailRecette = document.querySelector(".card--recipe-details-details p")

//Partie bouton
const nextButton = document.querySelector(".card button--next")
const previousButton = document.querySelector("card button--previous")

let currentRecetteList = [];
let currentRecette = null;

export function putRecette(arrayRecettesDonnees){
    currentRecette = arrayRecettesDonnees[0];

    if(arrayRecettesDonnees){
        currentRecetteList = arrayRecettesDonnees;
    }

    //displayRecette = currentRecette.id
    image.src = currentRecette.preview_url;
    nameRecette.innerHTML = currentRecette.name;
    detailRecette.innerHTML = currentRecette.steps

}

function nextRecette(){
    let newIndex = currentRecetteList.indexOf(currentRecette) + 1;
    if (newIndex === currentRecetteList.length) {
      newIndex = 0;
    }
    const nextRecette = currentRecetteList[newIndex];
    putRecette(nextRecette, currentRecetteList);
}

function previousRecette(){
    let newIndex = currentRecetteList.indexOf(currentRecette) - 1;
    if (newIndex == -1) {
      newIndex = currentRecetteList.length - 1;
    }
  
    const nexRecette = currentRecetteList[newIndex];
    putRecette(nexRecette, currentRecetteList);

}

// nextButton.addEventListener("click", nextRecette);
// previousButton.addEventListener("click", previousRecette);