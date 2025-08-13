export function GameOver({displaySetter, score}) {
    return (
        <div>
            <div>Game Over</div>
            <div>Your Score is {score?.currentScore}, High Score is {score?.highScore}</div>
            <button onClick={() => {
                displaySetter("GAME");
            }}
            >Restart</button>
        </div>
    )
}