import { useEffect, useState } from "react";
import { Card } from "./Card";
import "./Game.css";
import { loadPokemonData } from "../../utils/pokemonData";


export function Game() {
    
    const [cardsArray, setCardsArray] = useState(null);

    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;

        async function loadData() {
            const pokemonArray = await loadPokemonData(signal);

            const imageLoader = pokemonArray.map( entry => {

                const image = new Image();

                return new Promise( (resolve, reject ) => {
                    image.onload = resolve;
                    image.onerror = reject;
                    image.src = entry.imgURL;
                });
            });

            await Promise.all(imageLoader);

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