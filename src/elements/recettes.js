export function displayRecettes(arrayRecettes) {
    let recetteSection = document.querySelector(".recipes");
    recetteSection.innerHTML = ""; 

    //let titrePage = document.querySelector("#section-recipes h4")


  arrayRecettes.forEach((recette) => {
    console.log(recette.name)
    console.log(recette.preview_url)
    const recettePart = document.createElement("recettes-item");
    recettePart.setAttribute("name", recette.name);
    recettePart.setAttribute("preview_url", recette.preview_url);
   // genrePart.setAttribute("href", `#categories-${categorie.id}`)


    recetteSection.append(recettePart)

  });
}