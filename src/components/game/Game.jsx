import { useEffect, useState } from "react";
import { Card } from "./Card";
import "./Game.css";
import { loadPokemonData, randomizedArray } from "../../utils/pokemonData";


export function Game({scoreSetter}) {
    
    const [cardsArray, setCardsArray] = useState(null);

    function selectCard(id, scoreSetter, cardArraySetter) {
        const selectedCard = cardsArray.find( card => {
            return card?.id === Number(id);
        });

        if(selectedCard.selected) {
            scoreSetter(prevScore => { 
                return {...prevScore, currentScore: 0}  
            });
            
            return;
        }

        selectedCard.selectToggle();
        scoreSetter(prevScore => {
            let newScore = prevScore.currentScore + 1;
            let newHighScore = prevScore.highScore < newScore ?
                newScore : prevScore.highScore; 
                return {
                    currentScore: newScore,
                    highScore: newHighScore
                }
        });
        cardArraySetter([...randomizedArray(cardsArray)]);
    }

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
                return <Card key={cardItem.id}
                    id={cardItem.id}
                    imageURL={cardItem.imgURL}
                    scoreSetter={scoreSetter}
                    cardArraySetter={setCardsArray}
                    clickHandler={selectCard}
                ></Card>
            })}
        </div>
    )
}