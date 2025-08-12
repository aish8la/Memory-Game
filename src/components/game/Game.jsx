import { useEffect, useState } from "react";
import { Card } from "./Card";
import "./Game.css";
import { loadPokemonData, randomizedArray } from "../../utils/pokemonData";


export function Game() {
    
    const [cardsArray, setCardsArray] = useState(null);

    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;

        async function loadData() {
            let pokemonArray = await loadPokemonData(signal);
            if(!pokemonArray) return;
            const imageLoader = pokemonArray.map( entry => {

                const image = new Image();

                return new Promise( (resolve, reject ) => {
                    image.onload = resolve;
                    image.onerror = reject;
                    image.src = entry.imgURL;
                });
            });

            await Promise.all(imageLoader);

            pokemonArray = randomizedArray(pokemonArray);
            setCardsArray(pokemonArray);
         
        }

        loadData();
        
        return () => {
            controller.abort();
        }

    },[]);

    return (
        <div className="game-container">
            {!cardsArray ? "Loading...." 
            : cardsArray.map( cardItem => {
                return <Card key={cardItem.id} imageURL={cardItem.imgURL} ></Card>
            })}
        </div>
    )
}