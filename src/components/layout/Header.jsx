export function Header({score}) {
    return (
        <header className="header">
            Current Score = {score.currentScore}, High Score = {score.highScore}
        </header>
    )
}