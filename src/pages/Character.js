import getHash from '../utils/getHash'
import getData from '../utils/getData'

const Character = async () => {
    const id = getHash()
    const characters = await getData(id)
    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <image src="${characters.image}" alt="${characters.name}">
            <h2>${characters.name}</h2>
        </article>
        <article class="Characters-card">
            <h3>Episodes: <span>${characters.episode.length}</span></h3>
            <h3>Status: <span>${characters.status}</span></h3>
            <h3>Specie: <span>${characters.species}</span></h3>
            <h3>Gender: <span>${characters.gender}</span></h3>
            <h3>Origin: <span>${characters.origin.name}</span></h3>
            <h3>Last Location: <span>${characters.location.name}</span></h3>
        </article>
    </div>
    `
    return view
}

export default Character