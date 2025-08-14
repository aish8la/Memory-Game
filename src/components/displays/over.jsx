export function GameOver({displaySetter, score}) {
    return (
        <div className="main-screen">
            <h2>Game Over</h2>
            <div>Your Score is {score?.lastScore}</div>
            <div>High Score is {score?.highScore}</div>
            <button onClick={() => {
                displaySetter("GAME");
            }}
            >Restart</button>
        </div>
    )
}