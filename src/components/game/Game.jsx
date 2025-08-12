import { useEffect, useState } from "react";
import { Card } from "./Card";
import "./Game.css";


export function Game() {
    
    const [cardsArray, setCardsArray] = useState(null);

    useEffect(() => {
        const offset = Math.floor(Math.random() * 100);
        const apiString = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`;
        const finalList = fetch(apiString)
            .then( result => result.json())
            .then( parsedResult => parsedResult.results)
            .then( pokemonList => {
                return pokemonList.map( pokemon => {
                    let url = fetch(pokemon.url)
                        .then( resultPokemon => resultPokemon.json())
                        .then( parsedPokemonResult => {
                            return parsedPokemonResult.sprites.other["official-artwork"].front_default;
                        })
                        .catch( err => console.error(err));
                    return url;
                });
            })
            .catch(error => console.error(error));

        
        finalList.then(promises => {
            Promise.all(promises).then( links => {
                const imageUrls = [];
                links.forEach(link => {
                    const cardObj = {
                        imageURL: link,
                    }
                    //Cache Images
                    imageUrls.push(cardObj);
                    const imageElement = new Image();
                    imageElement.src = cardObj.imageURL;
                });
                setCardsArray(imageUrls);
            })
        })
        .catch(err => console.error("failed promise all: ", err));

    },[]);

    return (
        <div className="game-container">
            {cardsArray === null ? "Loading...." 
            : cardsArray.map( cardItem => {
                return <Card imageURL={cardItem.imageURL} ></Card>
            })}
        </div>
    )
}