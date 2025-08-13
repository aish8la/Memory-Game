export function MainMenu({displaySetter}) {
    return (
        <div>
            <button onClick={() => {
                displaySetter("GAME");
            }}
            >Start Game</button>
        </div>
    )
}