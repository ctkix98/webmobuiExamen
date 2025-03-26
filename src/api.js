// URL de base du serveur
const BASE_URL = 'https://webmobui-25-exa-backend-dbb26fcb95b3.herokuapp.com'

async function getAlleGenres(){
    const response = await fetch(`${BASE_URL}/api/genres`)
    const listeGenres = await response.json()
    return listeGenres;
}

async function getReceipesFromAGenre(id){
    const response = await fetch(`${BASE_URL}/api/genres/${id}/recipes`)
    const listeGenres = await response.json()
    return listeGenres;
}

export {getAlleGenres, getReceipesFromAGenre}