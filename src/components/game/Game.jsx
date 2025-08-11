import { Card } from "./Card";
import "./Game.css";


export function Game() {
    const cardsArray = Array(10).fill(<Card></Card>);
    return (
        <div className="game-container">
            {cardsArray}
        </div>
    )
}