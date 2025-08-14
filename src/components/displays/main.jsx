export function MainMenu({displaySetter}) {
    return (
        <div className="main-screen">
            <button onClick={() => {
                displaySetter("GAME");
            }}
            >Start Game</button>
        </div>
    )
}