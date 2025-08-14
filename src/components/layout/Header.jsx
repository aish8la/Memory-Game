export function Header({score, display}) {

    let headerText;

    switch(display) {
        case "MAIN":
            headerText = "THE MEMORY GAME";
            break;
        case "OVER":
            headerText = "GAME OVER";
            break;
        default:
            headerText = "THE MEMORY GAME";
            break;
    }

    return (
        <header className="header">
            {display === "GAME" ?
            <div className="score-header">            
                <div>Current Score = {score.currentScore}</div>
                <div>High Score = {score.highScore}</div>
            </div>
            : <h1 className="generic-header">{headerText}</h1>
            }
        </header>
    )
}