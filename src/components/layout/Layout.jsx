import { Header } from "./Header";

export function Layout({children, score, display}) {
    return (
        <div
            className="app"
        >
            <Header score={score} display={display}></Header>
            <main className="app-main">
                {children}
            </main>
        </div>
    )
}