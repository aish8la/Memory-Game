const apiString = "https://pokeapi.co/api/v2/pokemon";
const limit = 12;

function apiStringFill(limit, offset) {
    return apiString+"?limit="+limit+"&offset="+offset;
}

class CardClass {
    constructor(id, name, imgURL) {
        this.id = id;
        this.name = name;
        this.imgURL = imgURL;
        this.selected = false;
    }

    selectToggle() {
        if(!this.selected) this.selected = true;
    }
}

function randomNum(max) {
    return Math.floor(Math.random() * max) + 1;
}

async function fetchPokemonData(signal) {

    const api = apiStringFill(limit, randomNum(200));
    let pokemonLinks;
    try {
        const listAPIResponse = await fetch(api, {signal});
        const listJSON = await listAPIResponse.json();
        pokemonLinks = listJSON.results;

    } catch (error) {
        if(error.name === 'AbortError') return;
        console.error("Error occurred in fetching: ", error);
    }

    const promises = pokemonLinks.map( link => {
        return fetch(link.url, {signal})
            .then(response => response.json())
            .catch(err => {
                if(err.name === 'AbortError') return;
                console.error("Failed to fetch Data: ", err);
            });
    });

    const resolvedList = await Promise.all(promises);
    return resolvedList;
}

export async function loadPokemonData(controllerSignal) {
    const resolvedList = await fetchPokemonData(controllerSignal);
    const pokemonCardArray = resolvedList.map( entry => {
        const requiredData = {
            id: entry.id,
            name: entry.name,
            imgURL: entry.sprites.other["official-artwork"].front_default
        }

        return new CardClass(
            requiredData.id,
            requiredData.name,
            requiredData.imgURL
        )
    });

    return pokemonCardArray;

}
